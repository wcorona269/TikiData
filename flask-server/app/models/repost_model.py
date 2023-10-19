from .db import db
from .user_model import User
from .post_model import Post

class Repost(db.Model):
  __tablename__ = 'reposts'
  
  id = db.Column(db.Integer, primary_key=True, nullable=False)
  user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
  post_id = db.Column(db.Integer, db.ForeignKey('posts.id'), nullable=False)
  user = db.relationship('User', backref='reposts')
  post = db.relationship('Post', backref='reposts')
  
  @staticmethod
  def add_repost(user_id, post_id):
    try:
      new_repost = Repost(user_id=user_id, post_id=post_id)
      db.session.add(new_repost)
      db.session.commit()
      return True
    except Exception as e:
      db.session.rollback()  # Rollback the session in case of an error
      print(f"Error adding repost: {str(e)}")
      return False
    
  @staticmethod
  def delete_repost(id):
    try:
      repost_to_delete = Repost.query.filter_by(id=id).first()
      if repost_to_delete:
        db.session.delete(repost_to_delete)
        db.session.commit()
        return True
      else:
        return False
    except Exception as e:
      db.session.rollback()  # Rollback the session in case of an error
      print(f"Error deleting repost: {str(e)}")
      return False
  
  def to_dict(self):
    user_data = self.user.to_dict() if self.user else None
    post_data = self.post.to_dict() if self.post else Non 
    return {
				'id': self.id,
				'user': user_data,
				'post': post_data
		}