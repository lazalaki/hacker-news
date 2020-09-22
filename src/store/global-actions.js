import { SET_USER, SET_LOGGED_IN, SET_ALL_IDS } from './global-types';

export const setUserAction = (user, dispatch) => {
  dispatch({
    type: SET_USER,
    payload: { user: user },
  });
};

export const setLoggedInAction = (status, dispatch) => {
  dispatch({
    type: SET_LOGGED_IN,
    payload: { isLoggedIn: status },
  });
};

export const setAllIdsAction = (allIds, dispatch) => {
  dispatch({
    type: SET_ALL_IDS,
    payload: { allIds: allIds },
  });
};
