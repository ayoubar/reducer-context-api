import { useState } from 'react';
import UserContext from './userContext';

const data = [
  {
    login: 'ayoub',
    id: 240270,
    node_id: 'MDQ6VXNlcjI0MDI3MA==',
    avatar_url: 'https://avatars.githubusercontent.com/u/240270?v=4',
    gravatar_id: '',
    url: 'https://api.github.com/users/ayoub',
  },
  {
    login: 'BenChaliah',
    id: 43894468,
    node_id: 'MDQ6VXNlcjQzODk0NDY4',
    avatar_url: 'https://avatars.githubusercontent.com/u/43894468?v=4',
    gravatar_id: '',
    url: 'https://api.github.com/users/BenChaliah',
  },
  {
    login: 'ayoubbahmad',
    id: 24212010,
    node_id: 'MDQ6VXNlcjI0MjEyMDEw',
    avatar_url: 'https://avatars.githubusercontent.com/u/24212010?v=4',
    gravatar_id: '',
    url: 'https://api.github.com/users/ayoubbahmad',
  },
  {
    login: 'ayoubeddafali',
    id: 11875804,
    node_id: 'MDQ6VXNlcjExODc1ODA0',
    avatar_url: 'https://avatars.githubusercontent.com/u/11875804?v=4',
    gravatar_id: '',
  },
];

const API_URL = 'https://api.github.com/search/users?q=ayoub';

function UserState({ children }) {
  const [users, setUsers] = useState([]);

  async function getUsers() {
    const response = await fetch(API_URL);
    const data = await response.json();
    setUsers(data.items);
  }

  return (
    <UserContext.Provider
      value={{
        name: 'anass',
        age: 24,
        users,
        getUsers,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export default UserState;
