from .db import db
from .user_model import User
from datetime import datetime

class Notification(db.Model):
	__tablename__ = 'notifications'
	
	id = db.Column(db.Integer, index=True, primary_key=True)
	sender_id = db.Column(db.Integer, nullable=False)
	recipient_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
	post_id = db.Column(db.Integer, nullable=False) 
	created_at = db.Column(db.DateTime, default=datetime.utcnow)
	message=db.Column(db.String, nullable=False, default='Someone liked your post')
	is_read=db.Column(db.Boolean, nullable=False, default=False)
     
	recipient = db.relationship('User', back_populates='notifications', primaryjoin='Notification.recipient_id == User.id')
 
	def add_notification(recipient_id, sender_id, post_id, message): 
		new_notif = Notification(recipient_id=recipient_id, sender_id=sender_id, post_id=post_id, message=message)
		if new_notif:
			db.session.add(new_notif)
			db.session.commit()  
			return True
		else:
			return False
 
	def delete_notification(id):
		notif_to_delete = Notification.query.filter_by(id=id).first()
		if notif_to_delete:
			db.session.delete(notif_to_delete)
			db.session.commit()
			return True
		else:
			return False
 
	def to_dict(self):
		return {
			'id': self.id,
			'sender_id': self.sender_id,
			'recipient_id': self.recipient_id,
			'post_id': self.post_id,
			'timestamp': self.timestamp.isoformat(),
			'message': self.message,
			'is_read': self.is_read
			# Add more fields if necessary
		}
     
	def __repr__(self):
		return f'<Notification {self.id}>'