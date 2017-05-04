import React from 'react';

const Users = (props) => {
  return (
    <div>
      You're currently looking at the profile page for {props.params.userId}
    </div>
  )
}

export default Users;
