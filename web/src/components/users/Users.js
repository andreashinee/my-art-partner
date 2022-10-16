import React, { useState, useEffect } from 'react';
import * as userService from '../../services/user-service';
import UserTemplate from '../users/UsersTemplate';

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    userService.getUsers()
    .then(users => setUsers(users))
    .catch(error => console.error(error));
  }, [])

  return (
    <div className=" row row-cols-12 row-cols-sm-6 row-cols-md-5">
    {users.map((user) => (
      <div className='col' key={user.id}>
      <UserTemplate {...user}/>
      </div>
    ))}
    </div>
  )
}

export default Users