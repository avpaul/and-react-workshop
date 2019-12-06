import React, { useState, useEffect, useReducer, createContext } from 'react';
import TodoComponent from './todo';

const reducer = (state, { type, payload }) => {
  switch (type) {
    case 'add':
      return state.concat([payload]);

    case 'remove':
      // delete logic
      return state;

    default:
      return state;
  }
};

export const userContext = createContext(null);

function App({ id }) {
  const [user, setUser] = useState({ name: 'paul', age: '20' });
  const [newTodo, setNewTodo] = useState(null);
  const [todos, dispatch] = useReducer(reducer, ['learn hooks']);

  useEffect(() => {
    setUser({ name: 'paul', age: '20' });
  }, []);

  return (
    <userContext.Provider value={user}>
      <div className="App">
        <header className="App-header">DEMO APP</header>
        <TodoComponent />
      </div>
    </userContext.Provider>
  );
}

export default App;
