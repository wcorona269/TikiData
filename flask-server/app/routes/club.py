from flask import request, jsonify
import json
import os
from flask import Blueprint
import http.client
from dotenv import load_dotenv
load_dotenv(".flaskenv")
api_key = os.getenv("API_KEY")

bp = Blueprint('clubs', __name__, url_prefix='/clubs')

headers = {
    'x-rapidapi-host': "v3.football.api-sports.io",
    'x-rapidapi-key': api_key
}

	
@bp.route('/info/<clubId>/<season>', methods=['GET'])
def club_info(clubId, season):
  conn = http.client.HTTPSConnection("v3.football.api-sports.io")
  
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
  conn.request("GET", f"/fixtures?team={clubId}&season={season}",headers=headers)
  res = conn.getresponse()
  data = res.read()
  result = data.decode("utf-8")
  fixtures = json.loads(result)['response']
  
  combined_data = {
		'club': club_info,
		'squad': squad_data,
		'fixtures': fixtures
	}
  
  return combined_data;


@bp.route('/seasons/<clubId>', methods=['GET'])
def club_seasons(clubId):
  conn = http.client.HTTPSConnection("v3.football.api-sports.io")
  print(clubId)

  # Request club seasons
  conn.request("GET", f"/teams/seasons?team={clubId}", headers=headers)
  res = conn.getresponse()
  data = res.read()
  result = data.decode("utf-8")
  club_seasons = json.loads(result)['response']
  return club_seasons


@bp.route('/stats/<clubId>/<season>/', methods=['POST', 'GET'])
def club_stats(clubId, season):
  conn = http.client.HTTPSConnection("v3.football.api-sports.io")

  # retrieve competition ID list from request body
  competitions = request.json.get('competitions', [])
  print(competitions)
  
  club_stats = [];
  
  # iterate through competition IDs and compile club stats
  for competition_id in competitions:
    conn.request("POST", f"/teams/statistics?team={clubId}&season={season}&league={competition_id}", headers=headers)
    res = conn.getresponse()
    data = res.read()
    result = data.decode("utf-8")
    print(result)
    competition_stats = json.loads(result)['response']
    club_stats.append(competition_stats)
    
  
  return club_stats

