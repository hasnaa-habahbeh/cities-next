import { CHANGE_THEME } from '../actions/actionTypes';

const initialTheme =
  (typeof window !== 'undefined' && localStorage.getItem('theme')) || 'light';

const initialState = {
  theme: initialTheme,
};

const theme = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_THEME:
      return {
        ...state,
        theme: localStorage.getItem('theme') || 'light',
      };
    default:
      return state;
  }
};

export default theme;
