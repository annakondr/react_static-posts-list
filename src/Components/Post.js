import React from 'react';
import {users} from '../users.js';
import {comments} from '../comments.js';
import User from './User';
import CommentList from './CommentList';
import './Post.css';

function Post(props) {
  const user = users.find(one => one.id === props.userId)
  const comList = comments.filter(com => com.postId === props.id)
  return (
    <section>
     <h3>{props.title}</h3>
      <p>{props.text}</p>
      <User name={user.name} email={user.email}/>
      <CommentList list={comList}/>
    </section>
  )
}

export default Post;
