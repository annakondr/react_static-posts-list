import React from 'react';

function User(props) {
  return (
    <address><a href={"mailto:" + props.email}> {props.name} </a></address>
  )
}

export default User;
