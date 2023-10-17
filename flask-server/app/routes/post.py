from sqlalchemy import desc
from flask import Blueprint, request, jsonify
from ..models import db, Post


bp = Blueprint('posts', __name__, url_prefix='/posts')

@bp.route('/create', methods=['POST'])
def create_post():
  data = request.json
  user_id = data.get('user_id')
  text = data.get('text')
  
  if not text:
    return jsonify({'message': 'Missing required text field'}), 400
  
  post = Post(user_id=user_id, text=text)
  db.session.add(post)
  db.session.commit()
  
  return jsonify({'message': 'Post created successfully'}), 201
  
@bp.route('/fetch/<userId>')
def fetch_user_posts(userId):
  posts = Post.query.filter_by(user_id=userId).all()
  
  if not posts:
    return jsonify({'message': 'no posts found'}), 401
  
  posts_data = [post.to_dict() for post in posts]
  
  return jsonify({
		'message': 'Posts retrieved successfully',
		'posts': posts_data
	}), 200

@bp.route('/fetch/all')
def fetch_all_posts():
    # Query all posts and order them by created_at timestamp in descending order
    posts = Post.query.order_by(desc(Post.created_at)).all()

    if not posts:
        return jsonify({'message': 'no posts found'}), 404
      
    posts_data = [post.to_dict() for post in posts]

    return jsonify({
        'message': 'All posts retrieved successfully',
        'posts': posts_data
    }), 200