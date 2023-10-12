from .db import db
from datetime import datetime

class Post(db.Model):
  __tablename__ = 'posts'
  
  # posts table columns
  id = db.Column(db.Integer, primary_key=True, index=True, nullable=False)
  user_id = db.Column(db.Integer, db.ForeignKey('users.id'), index=True, nullable=False)
  username = db.Column(db.String, nullable=False)
  text = db.Column(db.String(200), nullable=False)
  parent_id = db.Column(db.Integer, db.ForeignKey('posts.id'))
  created_at = db.Column(db.DateTime, default=datetime.utcnow)
  user = db.relationship('User', back_populates='posts')
  likes = db.relationship('PostLike', back_populates='post')
  comments = db.relationship('Comment', back_populates='post')
    

  def to_dict(self):
      comments_data = [{'text': comment.text, 'created_at': comment.created_at.strftime(
          '%Y-%m-%d %H:%M:%S')} for comment in self.comments]
      return {
          'id': self.id,
          'user_id': self.user_id,
          'username': self.username,
          'text': self.text,
          'likes': self.likes,
          'comments': comments_data,
          # Convert datetime to string
          'created_at': self.created_at.strftime('%Y-%m-%d %H:%M:%S')
          # Add other fields as needed
      }

  def __repr__(self):
      return f'<Post {self.id}>'
