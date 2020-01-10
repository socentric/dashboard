import { SET_THEME, SET_WORKSPACE} from './actions';
const initialState = {
  theme: 'dark',
  workspace: 0,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_THEME:
      return {
        ...state,
        theme: action.shade 
      };
    case SET_WORKSPACE:
      return {
        ...state,
        workspace: action.id 
      };
    default:
      return state
  }
}

export default appReducer;