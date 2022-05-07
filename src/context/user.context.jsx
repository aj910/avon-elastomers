import { createContext, useEffect, useReducer } from 'react';

export const UserContext = createContext({
  user: null,
  setUser: () => null,
});

export const USER_ACTION_TYPES = {
  LOG_IN_USER: 'LOG_IN_USER',
  LOG_OUT_USER: 'LOG_OUT_USER',
  SET_CURRENT_USER: 'SET_CURRENT_USER',
  SET_FLASH_MESSAGE: 'SET_FLASH_MESSAGE',
  SET_WISHLIST_COUNT: 'SET_WISHLIST_COUNT',
};

const userReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case USER_ACTION_TYPES.LOG_IN_USER:
      return {
        ...state,
        loggedIn: true,
        user: payload,
      };
    case USER_ACTION_TYPES.LOG_OUT_USER:
      return {
        ...state,
        loggedIn: false,
        user: payload,
      };
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return {
        ...state,
        user: payload,
      };
    case USER_ACTION_TYPES.SET_FLASH_MESSAGE:
      return {
        ...state,
        flashMessages: payload,
      };
    case USER_ACTION_TYPES.SET_WISHLIST_COUNT:
      return {
        ...state,
        wishlistItemCount: payload,
      };
    default:
      throw new Error(`Unhandled type ${type} in userReducer`);
  }
};

const INITIAL_STATE = {
  flashMessages: [],
  loggedIn: Boolean(localStorage.getItem('avonToken')),
  wishlistItemCount: 0,
  user: {
    token: localStorage.getItem('avonToken'),
    name: localStorage.getItem('avonName'),
    email: localStorage.getItem('avonEmail'),
    mobileNumber: localStorage.getItem('avonMobileNumber'),
    profileImage: localStorage.getItem('avonProfileImage'),
    lastLogin: localStorage.getItem('avonLastLogin'),
  },
};

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, INITIAL_STATE);

  const { user } = state;

  const setUser = (user) => {
    dispatch({ type: USER_ACTION_TYPES.SET_CURRENT_USER, payload: user });
  };

  const value = { user, setUser };

  useEffect(() => {
    if (state.loggedIn) {
      localStorage.setItem('avonToken', state.user.token);
      localStorage.setItem('avonName', state.user.name);
      localStorage.setItem('avonEmail', state.user.email);
      localStorage.setItem('avonMobileNumber', state.user.mobileNumber);
      localStorage.setItem('avonProfileImage', state.user.profileImage);
      localStorage.setItem('avonLastLogin', state.user.lastLogin);
    } else {
      localStorage.removeItem('avonToken');
      localStorage.removeItem('avonName');
      localStorage.removeItem('avonEmail');
      localStorage.removeItem('avonMobileNumber');
      localStorage.removeItem('avonProfileImage');
      localStorage.removeItem('avonLastLogin');
    }
  }, [state.loggedIn]);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
