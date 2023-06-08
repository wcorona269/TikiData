from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import CheckConstraint
from flask_login import UserMixin
from flask_bcrypt import Bcrypt
import jwt
from datetime import datetime, timedelta

bcrypt = Bcrypt()
db = SQLAlchemy()


class User(UserMixin, db.Model):
    __tablename__ = 'users'
    
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(64), index=True, unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password_hash = db.Column(db.String(255), nullable=False)
    favorites = db.relationship('Favorite', back_populates='user')
    
    # Methods required by Flask-Login
    def get_id(self):
      return str(self.id)
    
    # database constraints
    __table_args__ = (
      CheckConstraint("length(password_hash) >= 8",
      name="password_length_check"),
    )

    # Authentication functions
    def set_password(self, password):
      pwhash = bcrypt.generate_password_hash(password)
      self.password_hash = pwhash.decode('utf-8')

    def check_password(self, password):
      return bcrypt.check_password_hash(self.password_hash, password)

    # Print user object
    def __repr__(self):
      return f"User('{self.username}', '{self.email}')"


# Favorites class. Users can save favorite leagues and clubs to help tailor their experience 
class Favorite(db.Model):
  __tablename__ = 'favorites'
  
  id = db.Column(db.Integer, primary_key=True)
  user_id = db.Column(db.Integer, db.ForeignKey('users.id'), index=True, nullable=False)
  club = db.Column(db.String(64), nullable=False)
  user = db.relationship('User', back_populates='favorites')
  
  def __repr__(self):
      return f"Favorite('{self.club}', '{self.user_id}')"
    