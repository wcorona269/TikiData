from sqlalchemy import create_engine
from flask import Flask, jsonify
from .config import Config
from app import routes
from flask_cors import CORS
# import requests
from flask_sqlalchemy import SQLAlchemy
from .models import db

app = Flask(__name__)

CORS(app)

app.config.from_object(Config)

app.register_blueprint(routes.main.bp)
app.register_blueprint(routes.matches.bp)
app.register_blueprint(routes.news.bp)
app.register_blueprint(routes.auth.bp)

db.init_app(app)

# engine = create_engine(db_url)

if __name__ == '__main__':
    app.run(port=5000, debug=True)