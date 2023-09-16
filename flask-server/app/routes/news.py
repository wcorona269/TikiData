from flask import Blueprint, redirect, jsonify
from GoogleNews import GoogleNews
import pandas as pd 
import urllib.parse


bp = Blueprint('news', __name__, url_prefix='/news')

@bp.route('/')
def fetchNews():
  gNews = GoogleNews(period='10d')
  topics = ['soccer transfer news',
            'BBC sport football',
            'ESPN FC',
            'Marca',
            ]
  
  newsarticles = []

  for topic in topics:
      gNews.clear()
      gNews.get_news(topic)
      result = gNews.results(sort=True)
      newsarticles.extend(result)
  
  return newsarticles;
