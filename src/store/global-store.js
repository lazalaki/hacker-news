import React, { createContext, useReducer } from 'react';
import { globalReducer, initialGlobalState } from './global-reducer';
import { setUserAction, setLoggedInAction } from './global-actions';

export const GlobalStore = createContext({});

export const GlobalStoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(
    globalReducer,
    initialGlobalState,
  );

  const setUser = (user) => {
    localStorage.setItem('user', JSON.stringify(user));
    setUserAction(user, dispatch);
    setLoggedInAction(true, dispatch);
  };

  const logout = () => {
    localStorage.clear();
    setUserAction(null, dispatch);
    setLoggedInAction(false, dispatch);
  };

  return (
    <GlobalStore.Provider value={{ state, setUser, logout }}>
      {children}
    </GlobalStore.Provider>
  );
};
