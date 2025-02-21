import {SET_HOME, SET_LANGUAGE} from '../types';
const initialState = {
    selectedLanguage:"en",
    isHomeScreen:false
};
const languageReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LANGUAGE:
      return{
        ...state,
        selectedLanguage:action.payload
      }
    case SET_HOME:
      return{
        ...state,
        isHomeScreen:true
      }
    default:
      return state;
  }
};
export default languageReducer;
