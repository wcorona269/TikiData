from flask import Flask, jsonify
from app.config import Config
from flask_cors import CORS
# import requests
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
from app import routes #
app.config.from_object(Config)
CORS(app)
print(app.config)
if app.config['ENV'] == 'development':
    app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://localhost/touchline_dev'
else:
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
    app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://localhost/touchline_prod'


db = SQLAlchemy(app)
