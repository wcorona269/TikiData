from sqlalchemy import desc
from flask import Blueprint, request, jsonify
from ..models import Comment

success_message = jsonify({
		'message': 'Comment created successfully'
	}), 200

bp = Blueprint('comments', __name__, url_prefix='/comments')


@bp.route('/create', methods=['POST'])
def create_comment():
  data = request.json
  user_id = data.get('user_id')
  post_id = data.get('post_id')
  text = data.get('text')
  parent_id = data.get('parent_id')
  
  if not text:
    return jsonify({
			'message': 'Missing required text field'
		}), 400
    
  if user_id and post_id and text and not parent_id:
    Comment.add_comment(user_id, post_id, text)
    return success_message
    
  if user_id and post_id and text and parent_id:
    Comment.add_comment(user_id, post_id, text, parent_id)
    return success_message
  
  return ({
		'message': 'Invalid request data'
	}), 400
  

@bp.route('/delete', methods=['DELETE'])
def delete_comment():
  data = request.json
  id = data.get('id')
  
  if id:
    comment = Comment.delete_comment(id)
    if comment == True:
      return jsonify({
				'message': 'Comment deleted successfully'
			}), 200
    else:
      return jsonify({
				'message': 'invalid request data'
			}), 400