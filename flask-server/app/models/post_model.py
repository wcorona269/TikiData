from .db import db
from datetime import datetime

class Post(db.Model):
  __tablename__ = 'posts'

  id = db.Column(db.Integer, primary_key=True, index=True, nullable=False)
  user_id = db.Column(db.Integer, db.ForeignKey(
      'users.id'), index=True, nullable=False)
  username = db.Column(db.String, nullable=False)
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
          'username': self.username,
          'text': self.text,
          'likes': self.likes,
          'parent_id': self.parent_id,
          # Convert datetime to string
          'created_at': self.created_at.strftime('%Y-%m-%d %H:%M:%S')
          # Add other fields as needed
      }

  def __repr__(self):
      return f'<Post {self.id}>'
