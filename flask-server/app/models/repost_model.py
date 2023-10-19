from .db import db
from .user_model import User
from .post_model import Post

class Repost(db.Model):
  __tablename__ = 'reposts'
  
  id = db.Column(db.Integer, primary_key=True, nullable=False)
  user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
  post_id = db.Column(db.Integer, db.ForeignKey('post.id'), nullable=False)
  user = db.relationship('User', backref='reposts')
  post = db.relationship('Post', backref='reposts')
  
  def add_repost(user_id, post_id):
    new_repost = Repost(user_id=user_id, post_id=post_id)
    if new_repost:
      db.session.add(new_repost)
      db.session.commit()
      return True
    else:
      return False
    
  def delete_repost(id):
    repost_to_delete = Repost.query.filter_by(id=id).first()
    
    if repost_to_delete:
      db.session.delete(repost_to_delete)
      db.session.commit()
      return True
    else:
      return False
  
  def to_dict(self):
    user_instance = User.query.get(self.user_id)
    post_instance = Post.query.get(self.post_id)
    user_data = user_instance.to_dict() if user_instance else None
    post_data = post_instance.to_dict() if post_instance else None
    return {
				'id': self.id,
				'user': user_data,
				'post': post_data
		}
