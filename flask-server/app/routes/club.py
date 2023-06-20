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
  
  conn.request("GET", f"/players/squads?team={clubId}", headers=headers)
  res = conn.getresponse()
  data = res.read()
  result = data.decode("utf-8")
  club_data = json.loads(result)['response']
  return club_data;