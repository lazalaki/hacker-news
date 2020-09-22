import { SET_USER, SET_LOGGED_IN, SET_ALL_IDS } from './global-types';
import { getFromStroage } from '../services/shared/localStorageService';

export const initialGlobalState = {
  user: getFromStroage('user') || null,
  isLoggedIn: false,
  allIds: [],
};

export const globalReducer = (state = initialGlobalState, action) => {
  switch (action.type) {
    case SET_USER:
    case SET_LOGGED_IN:
    case SET_ALL_IDS:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
