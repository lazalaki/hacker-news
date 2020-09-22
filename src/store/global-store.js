import React, { createContext, useReducer, useEffect } from 'react';
import { globalReducer, initialGlobalState } from './global-reducer';
import {
  setUserAction,
  setLoggedInAction,
  setAllIdsAction,
} from './global-actions';
import axios from 'axios';

export const GlobalStore = createContext({});

export const GlobalStoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(
    globalReducer,
    initialGlobalState,
  );

  useEffect(() => {
    getAllIds();
  }, []);

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

  const getAllIds = async () => {
    try {
      const { data } = await axios.get(
        'https://hacker-news.firebaseio.com/v0/newstories.json',
      );
      setAllIdsAction(data, dispatch);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <GlobalStore.Provider
      value={{ state, setUser, logout, getAllIds }}
    >
      {children}
    </GlobalStore.Provider>
  );
};
