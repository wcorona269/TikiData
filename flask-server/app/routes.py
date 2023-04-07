from app import app
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

@app.route('/')
def home():
    return 'Flask App'
    # return data
    
@app.route('/matches')
def matches():
  return 'matches timeline backend'

@app.route('/news')
def fetchNews():
  return 'news timeline'

if __name__ == '__main__':
    app.run(port=8000, debug=True)
