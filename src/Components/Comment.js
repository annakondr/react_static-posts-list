import React from 'react';
import User from './User';

function Comment(props) {
  return (
    <li>
      <User name={props.name}/>
      <p>{props.text}</p>
    </li>
  )
}

export default Comment;
