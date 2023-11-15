from flask import Blueprint, redirect, jsonify
from GoogleNews import GoogleNews
import pandas as pd 
import urllib.parse


bp = Blueprint('news', __name__, url_prefix='/news')

@bp.route('/all')
def fetchNews():
    gNews = GoogleNews(period='10d')
    topics = ['soccer transfer news',
            'BBC sport football',
            'ESPN FC',
            'Marca',
            ]

    news_articles = []
    for topic in topics:
        gNews.clear()
        gNews.get_news(topic)
        result = gNews.results(sort=True)
        news_articles.extend(result)

    cleaned_news = []
    for article in news_articles:
        cleaned_article = {key: value for key, 
                           value in article.items() if key != 'datetime'}
        cleaned_news.append(cleaned_article)

    return cleaned_news;

@bp.route('/top')
def fetchTopNews():
    gNews = GoogleNews(period='2d')
    news_articles = []

    gNews.clear()
    gNews.get_news('soccer news')
    result = gNews.results(sort=True)
    news_articles.extend(result)
    
    max_articles = 10
    count = 0

    cleaned_news = []
    for article in news_articles:
        cleaned_article = {key: value for key, value in article.items() if key != 'datetime'}
        cleaned_news.append(cleaned_article)
        
        count += 1
        if count >= max_articles:
            break

    return cleaned_news;