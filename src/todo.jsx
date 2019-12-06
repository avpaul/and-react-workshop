import React, { useContext } from 'react';
import { userContext } from './App.js';

// custom hook
export const useAuth = () => {
  // logic to check if the user is logged in
  return true;
};

const TodoComponent = () => {
  const isLoggedIn = useAuth();
  const user = useContext(userContext);

  return (
    // <div>
    //   {isLoggedIn && <div> user logged in</div>}
    //   {!isLoggedIn && <div> user logged out</div>}
    // </div>
        <div>{user.name}</div>
  );
};

export default TodoComponent;
