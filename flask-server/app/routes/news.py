from flask import Blueprint, redirect
from GoogleNews import GoogleNews
import pandas as pd 
import urllib.parse


bp = Blueprint('news', __name__, url_prefix='/news')

@bp.route('/')
def fetchNews():
  gNews = GoogleNews(period='1d')
  topics = ['latest professional soccer news', 
            'BBC sport football',
            'Goal.com',
            'ESPN FC',
            'Marca',
            ]
  # data = pd.DataFrame.from_dict(result)
  # data.head()
  newsarticles = []
  
  for topic in topics:
    gNews.clear()
    gNews.search(topic)
    result = gNews.results(sort=True)
    newsarticles.extend(result)
  
  return newsarticles