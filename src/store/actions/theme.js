import { CHANGE_THEME } from './actionTypes';

export const toggleMode = (currentTheme) => (dispatch) => {
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  document.body?.classList.remove(`${currentTheme}`);
  document.body.classList.add(`${newTheme}`);
  if (typeof window !== 'undefined') localStorage.setItem('theme', newTheme);
  dispatch({
    type: CHANGE_THEME,
  });
};
