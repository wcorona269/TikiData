from flask import Blueprint, redirect
from GoogleNews import GoogleNews
import pandas as pd 

bp = Blueprint('news', __name__, url_prefix='/news')

@bp.route('/', methods=['GET'])
def fetchNews():
  gNews = GoogleNews(period='2d')
  topics = ['latest professional soccer news', 
            'BBC sport football',
            'soccer highlights'
            'soccer news',
            'transfer news',
            'Goal.com',
            'ESPN FC',
            'Marca',
            'fourfourtwo',
            'Football365',
            'Transfermarkt',
            ]
  # data = pd.DataFrame.from_dict(result)
  # data.head()
  newsarticles = []
  
  for topic in topics:
    gNews.clear()
    gNews.search(topic)
    result = gNews.results(sort=True)
    newsarticles.extend(result[0:3])
  
  return newsarticles