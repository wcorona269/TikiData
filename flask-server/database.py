from seeds import post_seeds, user_seeds
import random
from dotenv import load_dotenv
import pdb
load_dotenv(".flaskenv")
from  app.models import db, User, Favorite, Post, PostLike, CommentLike, Comment, Repost

def seed_database(app):
  with app.app_context():
    db.drop_all()
    db.create_all()
    
    # user_ids = []
    # post_ids = []
    # comment_ids = []
    
    for user in user_seeds:
      username = user[0]
      email = user[1]
      bio = user[2]
      new_user = User(username=username, email=email, bio=bio)
      new_user.set_password('touchline')
      db.session.add(new_user)
      # user_ids.append(new_user.id)
      
    db.session.commit()
    user_ids = [user.id for user in User.query.all()]
    
    for _ in range(0, 300):
      new_post = Post(user_id=random.choice(user_ids), text=random.choice(post_seeds));
      db.session.add(new_post);
    
    db.session.commit()
    post_ids = [post.id for post in Post.query.all()]
    
    for _ in range(0, 300):  
      new_comment = Comment(user_id=random.choice(user_ids), post_id=random.choice(post_ids), text=random.choice(post_seeds))
      db.session.add(new_comment)
    
    db.session.commit()
    comment_ids = [comment.id for comment in Comment.query.all()]
    
    for _ in range(0, 300):
      post_like = PostLike(user_id=random.choice(user_ids), post_id=random.choice(post_ids))
      db.session.add(post_like)
    
    for _ in range(0, 300):
      comment_like = CommentLike(user_id=random.choice(user_ids), comment_id=random.choice(comment_ids))
      db.session.add(comment_like)
      
    for user_id in user_ids:
      for _ in range(random.randint(0, 10)):
        new_repost = Repost(user_id=user_id, post_id=random.choice(post_ids))
        db.session.add(new_repost)
          
    # create favorites
    # favorite = Favorite(club='Manchester City', user=will)
    
    db.session.commit()