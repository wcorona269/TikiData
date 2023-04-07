
from flask import Blueprint, redirect

bp = Blueprint('', __name__)

@bp.route('/')
def home():
    return 'Flask app'




# establish API connection
# url = "https://v3.football.api-sports.io/fixtures"

# API_KEY = 'bc5c0860d9d43d604063b03b996ffa18'

# payload = {}

# headers = {
#     'x-rapidapi-key': API_KEY,
#     'x-rapidapi-host': 'v3.football.api-sports.io'
# }

# response = requests.request("GET", url, headers=headers, data=payload)

# print(response.text)