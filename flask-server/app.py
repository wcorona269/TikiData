from flask import Flask, jsonify
from flask_cors import CORS
import requests
import http.client

app = Flask(__name__)
CORS(app)

url = "https://v3.football.api-sports.io/fixtures"

API_KEY = 'bc5c0860d9d43d604063b03b996ffa18'

payload = {}

headers = {
    'x-rapidapi-key': API_KEY,
    'x-rapidapi-host': 'v3.football.api-sports.io'
}

response = requests.request("GET", url, headers=headers, data=payload)

print(response.text)



# conn = http.client.HTTPSConnection("v3.football.api-sports.io")

# headers = {
#     'x-rapidapi-host': "v3.football.api-sports.io",
#     'x-rapidapi-key': API_KEY
# }

# conn.request("GET", "/{endpoint}", headers=headers)

# res = conn.getresponse()
# data = res.read()

# print(data.decode("utf-8"))

def teams():
    url = 'https://api-football.com/v3/fixtures'
    headers = {'x-rapidapi-host': 'api-football.com', 'x-rapidapi-key': API_KEY}
    response = requests.get(url, headers=headers)
    data = response.json()
    print(data)

@app.route('/')
def home():
    return response.json()
    # return data

	
if __name__ == '__main__':
    app.run(port=8000, debug=True)


    # return {"teams": ['Manchester City', 'Real Madrid', 'Juventus', 'Borrusia Dortmund', 'PSG']}


# def get_teams():