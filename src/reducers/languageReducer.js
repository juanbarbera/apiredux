import { CHANGE_LANGUAGE } from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case CHANGE_LANGUAGE:
      return state = {...state, language: action.payload};
    default: 
      return state;
  }
}