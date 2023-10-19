from flask import Blueprint, request, jsonify
from ..models.user_model import User
from ..models.notification_model import Notification

bp = Blueprint('notification', __name__, url_prefix='/notifications')

@bp.route('/create', methods=['POST'])
def add_notification():
  data = request.json
  recipient_id = data.get('recipient_id')
  sender_id = data.get('sender_id')
  post_id = data.get('post_id')
  message = data.get('message')
  
  if not recipient_id and sender_id and post_id and message:
    return jsonify({
				'message': 'Invalid request data'
    }), 400
  
  notification = Notification.add_notification(recipient_id, sender_id, post_id, message)
  if notification == True:
    return jsonify({
			'message': 'Notification created successfully'
		}), 200
  else:
    return jsonify({
        'message': 'Invalid request data'
    }), 400
  
  
@bp.route('/delete/<notifId>', methods=['DELETE'])
def delete_notification(notifId):
  if not notifId:
    return jsonify({
			'message': 'Invalid request data'
		}), 401
  
  
  result = Notification.delete_notification(notifId)
  if result == True:
    return jsonify({
			'message': 'Notification deleted successfully'
		}), 200
  else:
    return jsonify({
			'message': 'Invalid request data'
		}), 401
    

@bp.route('/fetch/<userId>', methods=['GET'])
def fetchNotifications(userId):
	user = User.query.get(userId)
	if user is None:
		return jsonify({
			'message': 'User not found'
		}), 404

	notifications = Notification.query.filter_by(recipient_id=userId).all()
	notifications_list = [notification.to_dict() for notification in notifications]

	return jsonify({
		'notifications': notifications_list
	}), 200