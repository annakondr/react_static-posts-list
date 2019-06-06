import React from 'react';
import {posts} from '../posts.js';
import Post from './Post.js';


function PostList() {
  const postList = [];
  posts.forEach((item) => {
    postList.push(<Post title={item.title} text={item.body} userId={item.userId} id={item.id}/>)
  });

  return postList
}

export default PostList;

