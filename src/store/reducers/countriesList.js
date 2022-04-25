import {
  SET_ALL,
  RESET_DISPLAYED,
  FILTER_BY_NAME,
  FILTER_BY_REGION,
} from '../actions/actionTypes';

const initialState = {
  allCountries: [],
  displayedCountries: [],
};

const countriesList = (state = initialState, action) => {
  switch (action.type) {
    case SET_ALL:
      return {
        ...state,
        allCountries: action.payload,
      };
    case RESET_DISPLAYED:
      return {
        ...state,
        displayedCountries: state.allCountries,
      };
    case FILTER_BY_NAME:
      return {
        ...state,
        displayedCountries: action.payload,
      };
    case FILTER_BY_REGION: {
      return { ...state, displayedCountries: action.payload };
    }
    default:
      return state;
  }
};

export default countriesList;
