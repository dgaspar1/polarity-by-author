import psycopg2
import nltk
from nltk.sentiment import SentimentIntensityAnalyzer

nltk.download("vader_lexicon")

try:
    connection = psycopg2.connect(
        dbname="postgres",
        user="postgres",
        password="123321123",
        host="localhost",
        port="5432"
    )
    
    print("Conexão estabelecida com sucesso!")
except Exception as e:
    print("Erro ao conectar ao banco de dados:", e)

cursor = connection.cursor()
query = "SELECT * FROM \"Tweets\""
cursor.execute(query)

sia = SentimentIntensityAnalyzer()

results = cursor.fetchall()
for row in results:
    tweet_text = row[2]
    tweet_text = 'I hate Santos'
    sentiment_scores = sia.polarity_scores(tweet_text)
    print(f"Texto do tweet: {tweet_text}")
    print(f"Polaridade: {sentiment_scores['compound']}")
    print("-" * 30)

cursor.close()
connection.close()