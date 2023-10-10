from flask import Blueprint, request, jsonify
from ..models import Like


bp = Blueprint('likes', __name__, url_prefix='/likes')

@bp.route('/create', methods=['POST'])
def create_like():
  data = request.json
  user_id = data.get('user_id')
  post_id = data.get('post_id')
  
  if not user_id or not post_id:
    return jsonify({
			'message': 'Invalid request data'
		}), 400
  
  Like.add_like(user_id, post_id)
  
  return jsonify({
		'message': 'Like created successfully'
	}), 200
  

@bp.route('/delete', methods=['DELETE'])
def delete_like():
	data = request.json
	user_id = data.get('user_id')
	post_id = data.get('post_id')

	if not user_id or not post_id:
		return jsonify({
			'message': 'Invalid request data'
		}), 400

	deleted = Like.delete_like(user_id, post_id)

	if deleted:
		return jsonify({
			'message': 'Like deleted successfully'
		}), 200
	else:
		return jsonify({
			'message': 'Like not found'
		}), 404