import React, { useEffect, useContext } from 'react';
import UserContext from './../context/users/userContext';
function Users() {
  const userContext = useContext(UserContext);
  const { users, getUsers } = userContext;

  useEffect(() => {
    getUsers();
  }, []);

  return <div>{users && users.map((user) => <p> {user.login}</p>)}</div>;
}

export default Users;
