from dotenv import load_dotenv
load_dotenv(".flaskenv")
from  app.models import db, User, Favorite, Post, PostLike, CommentLike, Comment

def seed_database(app):
  with app.app_context():
    db.drop_all()
    db.create_all()
    
    will = User(username='willyc', email='wcorona269@gmail.com')
    will.set_password('Loyola301!')
    spencer = User(username='spennybluntz', email='spencer@gmail.com')
    spencer.set_password('courts')
    
    db.session.add(will)
    db.session.add(spencer)
    db.session.commit()
    
   # Creating posts
    post1 = Post(text='Who will win the World Cup this year?', user_id=will.id)
    post2 = Post(text='Thoughts on the recent match between Team A and Team B?', user_id=spencer.id)

    db.session.add(post1)
    db.session.add(post2)
    db.session.commit()

    # Creating comments
    comment1 = Comment(user_id=spencer.id, post_id=post1.id, text='I think Team C has a strong chance!')
    comment2 = Comment(user_id=will.id, post_id=post1.id, text='Team B has a solid lineup as well.')
    comment3 = Comment(user_id=will.id, post_id=post2.id, text='It was an intense match!')
    comment4 = Comment(user_id=will.id, post_id=post2.id, text='I agree! So intense!', parent_id=comment3.id)

    db.session.add(comment1)
    db.session.add(comment2)
    db.session.add(comment3)
    db.session.add(comment4)
    db.session.commit()

    # Creating post likes and comment likes
    post_like = PostLike(user_id=will.id, post_id=post1.id)
    comment_like = CommentLike(user_id=will.id, comment_id=comment1.id)
    db.session.add(post_like)
    db.session.add(comment_like)
    db.session.commit()
    
    
      
    # create favorites
    favorite = Favorite(club='Barcelona', user=will)
    favorite2 = Favorite(club='Manchester City', user=will)
    favorite3 = Favorite(club='Chelsea', user=spencer)
    db.session.add(favorite)
    db.session.add(favorite2)
    db.session.add(favorite3)
    db.session.commit()