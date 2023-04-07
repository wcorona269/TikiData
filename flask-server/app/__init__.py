from flask import Flask, jsonify
from app.config import Config
from app import routes
from app import routes 
from flask_cors import CORS
# import requests
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config.from_object(Config)
CORS(app)

app.register_blueprint(routes.main.bp)
app.register_blueprint(routes.matches.bp)
app.register_blueprint(routes.news.bp)

# print(app.config)
if app.config['ENV'] == 'development':
    app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://localhost/touchline_dev'
else:
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
    app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://localhost/touchline_prod'

db = SQLAlchemy(app)

if __name__ == '__main__':
    app.run(port=8000, debug=True)