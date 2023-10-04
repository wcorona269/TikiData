import json
import math
from datetime import datetime
import os
from flask import Blueprint
import http.client
from dotenv import load_dotenv
from GoogleNews import GoogleNews
load_dotenv(".flaskenv")
api_key = os.getenv("API_KEY");

bp = Blueprint('competition', __name__, url_prefix='/competition')

@bp.route('/<leagueId>/<season>', methods=['GET'])
def competitionInfo(leagueId, season):
  conn = http.client.HTTPSConnection("v3.football.api-sports.io")
  headers = {
			'x-rapidapi-host': "v3.football.api-sports.io",
			'x-rapidapi-key': api_key
	}
  
  # Make the first API call to get standings
  conn.request("GET", f"/standings?league={leagueId}&season={season}", headers=headers)
  res = conn.getresponse()
  data = res.read()
  result = data.decode("utf-8")
  standings_data = json.loads(result)['response']
  
  # Get top scorer data
  conn.request("GET", f"/players/topscorers?season={season}&league={leagueId}", headers=headers)
  res = conn.getresponse()
  data = res.read()
  result = data.decode("utf-8")
  top_scorer_data = json.loads(result)["response"]
  
  # Top assists data
  conn.request("GET", f"/players/topassists?season={season}&league={leagueId}",headers=headers)
  res = conn.getresponse()
  data = res.read()
  result = data.decode("utf-8")
  top_assists_data = json.loads(result)["response"]
  
  # Fixture data
  conn.request("GET", f"/fixtures?season={season}&league={leagueId}", headers=headers)
  res = conn.getresponse()
  data = res.read()
  result = data.decode("utf-8")
  fixture_data = json.loads(result)["response"]
  
  # fetch competition news
  country = standings_data[0]['league']['country']
  name = standings_data[0]['league']['name']
  news_topic = f'{country} {name}'
  gNews = GoogleNews(period='20d')
  gNews.get_news(news_topic)
  competition_news = gNews.results()
  print(competition_news)

  cleaned_news = []
  for article in competition_news:
      # Create a new dictionary excluding the 'datetime' key
      cleaned_article = {key: value for key,
                        value in article.items() if key != 'datetime'}
      cleaned_news.append(cleaned_article)
          
  # combine data and return to frontend
  combined_data = {
		"standings": standings_data,
		"top scorers": top_scorer_data,
		"top assists": top_assists_data,
    "fixtures": fixture_data,
    "news": cleaned_news,
	}
  
  return combined_data