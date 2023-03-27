from flask import Flask, jsonify
from flask_cors import CORS
import requests

app = Flask(__name__)
CORS(app)

API_KEY = 'bc5c0860d9d43d604063b03b996ffa18'

@app.route('/teams')
def get_teams():
    url = f'https://api-football.com/v3/teams'
    headers = {'x-rapidapi-host': 'api-football.com', 'x-rapidapi-key': API_KEY}
    response = requests.get(url, headers=headers)
    data = response.json()
    return jsonify(data['response'])

if __name__ == '__main__':
    app.run(port=8000, debug=True)