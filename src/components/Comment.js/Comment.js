import React from 'react';
import './Comment.css';

function Comment({ comment }) {
  return (
    <li className="card__message-item">
      <img className="card__message-photo" src={comment.photo} />
      <div className="card__message-info">
        <p className="card__message-name">{comment.user.fio}</p>
        <p className="card__message-text">{comment.comment_text}</p>
      </div>
    </li>
  );
}

export default Comment;
