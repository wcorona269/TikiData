import json
import os
from flask import Blueprint
import http.client
from dotenv import load_dotenv
load_dotenv(".flaskenv")
api_key = os.getenv("API_KEY");


bp = Blueprint('competition', __name__, url_prefix='/competition')

@bp.route('/<leagueId>', methods=['GET'])
def competitionInfo(leagueId):
  conn = http.client.HTTPSConnection("v3.football.api-sports.io")
  headers = {
			'x-rapidapi-host': "v3.football.api-sports.io",
			'x-rapidapi-key': api_key
	}
  
  conn.request("GET", f"/standings?league={leagueId}&season=2022", headers=headers)
  res = conn.getresponse()
  data = res.read()
  result = data.decode("utf-8")
  json_data = json.loads(result)
  fixtures = json_data["response"]
  return fixtures
