from flask_migrate import Migrate
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
    posts = db.relationship('Post', back_populates='user')
    likes = db.relationship('Like', back_populates='user')
    
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
    

class Post(db.Model):
  __tablename__ = 'posts'
  
  id = db.Column(db.Integer, primary_key=True, index=True, nullable=False)
  user_id = db.Column(db.Integer, db.ForeignKey('users.id'), index=True, nullable=False)
  text = db.Column(db.String(200), nullable=False)
  parent_id = db.Column(db.Integer, db.ForeignKey('posts.id'))
  # Add this line for the timestamp
  created_at = db.Column(db.DateTime, default=datetime.utcnow)
  user = db.relationship('User', back_populates='posts')
  likes = db.relationship('Like', back_populates='post')

  # Establishing a relationship with the parent post
  parent_post = db.relationship('Post', remote_side=[id])
  
  def to_dict(self):
      return {
          'id': self.id,
          'user_id': self.user_id,
          'text': self.text,
          'parent_id': self.parent_id,
          # Convert datetime to string
          'created_at': self.created_at.strftime('%Y-%m-%d %H:%M:%S')
          # Add other fields as needed
      }

  def __repr__(self):
      return f'<Post {self.id}>'
    


class Like(db.Model):
    __tablename__ = 'likes'

    id = db.Column(db.Integer, primary_key=True, index=True, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), index=True, nullable=False)
    post_id = db.Column(db.Integer, db.ForeignKey('posts.id'), index=True, nullable=False)

    # Establish a relationship with users and posts
    user = db.relationship('User', back_populates='likes')
    post = db.relationship('Post', back_populates='likes')
    
    def add_like(user_id, post_id):
      new_like = Like(user_id=user_id, post_id=post_id)
      db.session.add(new_like)
      db.session.commit()
      
    def delete_like(user_id, post_id):
      like_to_delete = Like.query.filter_by(
      user_id=user_id, post_id=post_id).first()
      
      if like_to_delete:
        db.session.delete(like_to_delete)
        db.session.commit()
        return True  # Indicates successful deletion
      else:
        return False  # Indicates like not found, not deleted
