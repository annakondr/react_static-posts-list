import React from 'react';
import Comment from './Comment';

function CommentList(props) {
  const commentList = [];
  props.list.forEach((item) => {
    commentList.push(<Comment text={item.body} name={item.name}
                              id={item.postId}email={item.email}/>)
  });

  return (
    <ul>
      {commentList}
    </ul>
  )
}

export default CommentList;
