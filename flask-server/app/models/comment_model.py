from datetime import datetime
from .user_model import User
from .db import db

class Comment(db.Model):
	__tablename__ = 'comments'

	id = db.Column(db.Integer, primary_key=True, index=True, nullable=False)
	user_id = db.Column(db.Integer, db.ForeignKey('users.id'), index=True, nullable=False)
	post_id = db.Column(db.Integer, db.ForeignKey('posts.id'), index=True, nullable=False)  # Define foreign key to 'posts.id'
	text = db.Column(db.String(200), nullable=False)
	created_at = db.Column(db.DateTime, default=datetime.utcnow)
	parent_id = db.Column(db.Integer, db.ForeignKey('comments.id'), default=None)
 
	user = db.relationship('User', back_populates='comments')
	post = db.relationship('Post', back_populates='comments', foreign_keys=[post_id])
	parent_comment = db.relationship('Comment', remote_side=[id], back_populates='replies')
	replies = db.relationship('Comment', back_populates='parent_comment')
	comment_likes = db.relationship('CommentLike', back_populates='comment')

	def to_dict(self):
		user_instance = User()
		username = user_instance.user_info(self.user_id)
  
		return {
			'id': self.id,
			'user_id': self.user_id,
			'post_id': self.post_id,
			'text': self.text,
			'created_at': self.created_at.strftime('%Y-%m-%d %H:%M:%S'),
			'username': username,  # Include username of the comment user
			'parent_id': self.parent_id,
			# Add other fields as needed
		}
    
  
	def delete_comment(id):
		comment_to_delete = Comment.query.filter_by(id=id).first()

		if (comment_to_delete):
			db.session.delete(comment_to_delete)
			db.session.commit()
			return True
		else:
			return False
  
  
	def __repr__(self):
			return f'<Comment {self.id}>'