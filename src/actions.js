export const SET_THEME = 'SetTheme';
export const SET_WORKSPACE = 'SetWorkspace';

export const setTheme = shade => ({
  type: SET_THEME,
  shade
});

export const setWorkspace = id => ({
  type: SET_WORKSPACE,
  id
});