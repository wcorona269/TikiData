from flask import Flask, jsonify
from flask_caching import Cache
from flask_sqlalchemy import SQLAlchemy
from flask_jwt_extended import JWTManager
from sqlalchemy import create_engine
from .config import Config
from app import routes
from flask_cors import CORS
from .models import db
import os

app = Flask(__name__)
jwt = JWTManager(app)
CORS(app)
app.config.from_object(Config)
app.config['CACHE_TYPE'] = 'simple'  # Use a simple in-memory cache
cache = Cache(app)

@app.route('/api/config')
@cache.cached(timeout=3600)
def get_config():
    api_key = os.environ.get('API_KEY')
    return jsonify({'api_key': api_key})

app.register_blueprint(routes.main.bp)
app.register_blueprint(routes.matches.bp)
app.register_blueprint(routes.match.bp)
app.register_blueprint(routes.news.bp)
app.register_blueprint(routes.auth.bp)
app.register_blueprint(routes.competition.bp)
app.register_blueprint(routes.club.bp)
app.register_blueprint(routes.player.bp)

db.init_app(app)

# engine = create_engine(db_url)

if __name__ == '__main__':
    app.run(port=5000, debug=True)

