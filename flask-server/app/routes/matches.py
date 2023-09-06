import json
import os
from flask import Blueprint
import http.client
from dotenv import load_dotenv
load_dotenv(".flaskenv")

api_key = os.getenv("API_KEY")


bp = Blueprint('matches', __name__, url_prefix='/matches')

@bp.route('/<date>', methods=['GET'])
def matches(date):
  print(date)
  conn = http.client.HTTPSConnection("v3.football.api-sports.io")
  headers = {
    'x-rapidapi-host': "v3.football.api-sports.io",
    'x-rapidapi-key': api_key
    }
  
  conn.request("GET",
              #  "/fixtures?league=39&season=2023&round=Regular+Season+-+1"
              #  "/fixtures?live=all",
               f"/fixtures?date={date}",
                headers=headers)
  res = conn.getresponse()
  data = res.read()
  result = data.decode("utf-8")
  json_data = json.loads(result)
  matches_of_the_day = json_data["response"]
  return matches_of_the_day