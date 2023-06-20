import json
import os
from flask import Blueprint
import http.client
from dotenv import load_dotenv
load_dotenv(".flaskenv")
api_key = os.getenv("API_KEY")

bp = Blueprint('clubs', __name__, url_prefix='/clubs')

@bp.route('/<clubId>', methods=['GET'])
def competitionInfo(clubId):
  print(clubId)
  conn = http.client.HTTPSConnection("v3.football.api-sports.io")
  headers = {
    'x-rapidapi-host': "v3.football.api-sports.io",
    'x-rapidapi-key': api_key
	}
  
  # Request club info
  conn.request("GET", f"/teams?id={clubId}", headers=headers)
  res = conn.getresponse()
  data = res.read()
  result = data.decode("utf-8")
  club_info = json.loads(result)['response']
  
  # Request squad details
  conn.request("GET", f"/players/squads?team={clubId}", headers=headers)
  res = conn.getresponse()
  data = res.read()
  result = data.decode("utf-8")
  squad_data = json.loads(result)['response']
  
  # Request club fixtures (previous and upcoming)
  conn.request("GET", f"/fixtures?team={clubId}&season=2022,2023",headers=headers)
  res = conn.getresponse()
  data = res.read()
  result = data.decode("utf-8")
  fixtures = json.loads(result)['response']
  
  combined_data = {
		'club': club_info,
		'squad': squad_data,
		'fixtures': fixtures
	}
  
  return combined_data