import { useState, useReducer } from 'react';
import NavBar from './components/NavBar';
import Users from './components/Users';
import './App.css';

import UserState from './context/users/UserState';
const types = {
  decrementer: 'decrementer',
  incremnter: 'incrementer',
};

function reducer(state, action) {
  console.log(action);
  console.log(`action  %c${action}`, 'color: green; font-weight: bold; ');
  switch (action.type) {
    case types.decrementer:
      return {
        ...state,
        count: state.count - 1,
        message: 'decrementer',
        background: 'pink',
      };
    case types.incremnter:
      return {
        ...state,
        count: state.count + 1,
        message: 'incremnter',
        background: 'dodgerblue',
      };
    default:
      return state;
  }
}

function App() {
  // const [count, setCount] = useState(0);

  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    background: '',
    message: '',
  });
  /*
    state  = {
      count:0,
      users: []
    }
  */

  const { count, background, message } = state;

  function decrementer() {
    dispatch({ type: types.decrementer });
  }

  function incrementer() {
    dispatch({ type: types.incremnter });
  }

  return (
    <>
      <UserState>
        <NavBar />
        <div className="container text-center">
          <Users />
        </div>
      </UserState>
      {/* <h1
        style={{
          background: background,
        }}
      >
        {' '}
        Sandbox : Reducer {message}
      </h1>
      <button onClick={incrementer}>+</button>
      {count}
      <button onClick={decrementer}>-</button> */}
    </>
  );
}

export default App;
