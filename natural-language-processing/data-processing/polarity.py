import psycopg2
import nltk
from nltk.sentiment import SentimentIntensityAnalyzer

sia = SentimentIntensityAnalyzer()

results = 
for row in results:
    tweet_text = row[2]
    tweet_text = 'I hate Santos'
    sentiment_scores = sia.polarity_scores(tweet_text)
    print(f"Texto do tweet: {tweet_text}")
    print(f"Polaridade: {sentiment_scores['compound']}")
    print("-" * 30)

cursor.close()
connection.close()