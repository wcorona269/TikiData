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
  
  # Make the first API call to get standings
  conn.request("GET", f"/standings?league={leagueId}&season=2022", headers=headers)
  res = conn.getresponse()
  data = res.read()
  result = data.decode("utf-8")
  standings_data = json.loads(result)['response']
  
  # Get top scorer data
  conn.request("GET", f"/players/topscorers?season=2022&league={leagueId}", headers=headers)
  res = conn.getresponse()
  data = res.read()
  result = data.decode("utf-8")
  top_scorer_data = json.loads(result)["response"]
  
  # Top assists data
  conn.request("GET", f"/players/topassists?season=2022&league={leagueId}",headers=headers)
  res = conn.getresponse()
  data = res.read()
  result = data.decode("utf-8")
  top_assists_data = json.loads(result)["response"]
  
  
  # combine data and return to frontend
  combined_data = {
		"standings": standings_data,
		"top scorers": top_scorer_data,
		"top assists": top_assists_data
	}
  
  return combined_data