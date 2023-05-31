from flask import Flask, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_jwt_extended import JWTManager
from sqlalchemy import create_engine
from .config import Config
from app import routes
from flask_cors import CORS
from .models import db

app = Flask(__name__)
jwt = JWTManager(app)

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

