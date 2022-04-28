import { 
  FETCH_CARPLATE,
  FETCH_FIATEXCHANGE,
  FETCH_POSTCODE,
  FETCH_CRYPTOVALUE
} from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_CARPLATE:
      return {...state, currentCar: action.payload};
    case FETCH_POSTCODE:
      return {...state, currentAddress: action.payload}
    case FETCH_FIATEXCHANGE:
      return {...state, current: action.payload};
    case FETCH_CRYPTOVALUE:
      return {...state, crypto: action.payload}
    default:
      return state;
  }
}