from .db import db

class Like(db.Model):
    __tablename__ = 'likes'

    id = db.Column(db.Integer, primary_key=True, index=True, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey(
        'users.id'), index=True, nullable=False)
    username = db.Column(db.String, nullable=False)
    post_id = db.Column(db.Integer, db.ForeignKey(
        'posts.id'), index=True, nullable=False)

    # Establish a relationship with users and posts
    user = db.relationship('User', back_populates='likes')
    post = db.relationship('Post', back_populates='likes')

    def add_like(user_id, post_id, username):
      new_like = Like(user_id=user_id, post_id=post_id, username=username)
      db.session.add(new_like)
      db.session.commit()

    def delete_like(user_id, post_id):
      like_to_delete = Like.query.filter_by(
          user_id=user_id, post_id=post_id).first()

      if like_to_delete:
        db.session.delete(like_to_delete)
        db.session.commit()
        return True
      else:
        return False
