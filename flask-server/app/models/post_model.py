from .db import db
from .user_model import User
from datetime import datetime

class Post(db.Model):
  __tablename__ = 'posts'
  
  # posts table columns
  id = db.Column(db.Integer, primary_key=True, index=True, nullable=False)
  text = db.Column(db.String(200), nullable=False)
  user_id = db.Column(db.Integer, db.ForeignKey('users.id'), index=True, nullable=False)
  parent_id = db.Column(db.Integer, db.ForeignKey('posts.id'))
  created_at = db.Column(db.DateTime, default=datetime.utcnow)
  # relationships
  user = db.relationship('User', back_populates='posts')
  likes = db.relationship('PostLike', back_populates='post')
  comments = db.relationship('Comment', back_populates='post')
  
  def to_dict(self):
    user_instance = User.query.get(self.user_id)
    user_data = User.to_dict(user_instance) if user_instance else None
    return {
			'id': self.id,
			'user_id': self.user_id,
			'username': user_data['username'],
			'text': self.text,
			'likes': [like.to_dict() for like in self.likes],
			'comments': [comment.to_dict() for comment in self.comments],
			# Convert datetime to string
			'created_at': self.created_at.strftime('%Y-%m-%d %H:%M:%S')
			# Add other fields as needed
		}	
    
def __repr__(self):
	return f'<Post {self.id}>'	
