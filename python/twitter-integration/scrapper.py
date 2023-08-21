from playwright.sync_api import sync_playwright
from nested_lookup import nested_lookup


def scrape_topic(url: str) -> dict:
    """
    Scrape Twitter Topic timeline for latest public tweets e.g.:
    https://twitter.com/i/topics/853980498816679937
    The list of Twitter topics can be found here: 
    https://twitter.com/i/topics/picker/home
    """
    _xhr_calls = []

    def intercept_response(response):
        """capture all background requests and save them"""
        # we can extract details from background requests
        if response.request.resource_type == "xhr":
            _xhr_calls.append(response)
        return response

    with sync_playwright() as pw:
        browser = pw.chromium.launch()
        context = browser.new_context(viewport={"width": 1920, "height": 1080})
        page = context.new_page()

        # enable background request intercepting:
        page.on("response", intercept_response)
        # go to url and wait for the page to load
        page.goto(url)
        page.wait_for_selector("[data-testid='tweet']")

        # find all tweet background requests:
        topic_calls = [f for f in _xhr_calls if "TopicLandingPage" in f.url]
        tweets = []
        for xhr in topic_calls:
            data = xhr.json()
            xhr_tweets = nested_lookup("tweet_results", data)
            tweets.extend([tweet["result"] for tweet in xhr_tweets])
        return tweets


if __name__ == "__main__":  
    # example: "dogs" topic:
    print(scrape_topic("https://twitter.com/i/topics/853980498816679937"))