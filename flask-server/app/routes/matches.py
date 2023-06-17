import json
import os
from flask import Blueprint
import http.client
from dotenv import load_dotenv
load_dotenv(".flaskenv")

api_key = os.getenv("API_KEY")


bp = Blueprint('matches', __name__, url_prefix='/matches')

@bp.route('/live', methods=['GET'])
def live():
  conn = http.client.HTTPSConnection("v3.football.api-sports.io")
  headers = {
    'x-rapidapi-host': "v3.football.api-sports.io",
    'x-rapidapi-key': api_key
    }
  
  params = {
      "league": "39",  # Premier League
      "team": "50",    # Manchester City
      "season": "2023"
  }
  
  conn.request("GET",
              #  "/fixtures?league=39&season=2023&round=Regular+Season+-+1"
               "/fixtures?live=all",
                headers=headers)
  res = conn.getresponse()
  data = res.read()
  result = data.decode("utf-8")
  json_data = json.loads(result)
  competition = json_data["response"]
  return competition