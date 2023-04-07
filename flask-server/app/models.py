from werkzeug.security import generate_password_hash, check_password_hash
from flask_sqlalchemy import SQLAlchemy
from flask_login import UserMixin

db = SQLAlchemy()

class User(UserMixin, db.Model):
    __tablename__ = 'users'
    
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(64), index=True, unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password_hash = db.Column(db.String(128))
    favorites = db.relationship('Favorite', back_populates='user')
    
    def __repr__(self):
      return f"User('{self.username}', '{self.email}', '{self.favorites}')"

    def set_password(self, password):
        self.password_hash = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password_hash, password)
      
class Favorite(db.Model):
  __tablename__ = 'favorites'
  
  id = db.Column(db.Integer, primary_key=True)
  user_id = db.Column(db.Integer, db.ForeignKey('users.id'), index=True, nullable=False)
  club = db.Column(db.String(64), nullable=False)
  user = db.relationship('User', back_populates='favorites')
  
  def __repr__(self):
      return f"Favorite('{self.club}', '{self.user_id}')"