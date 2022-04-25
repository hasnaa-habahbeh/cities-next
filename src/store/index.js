import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { HYDRATE, createWrapper } from 'next-redux-wrapper';
import { composeWithDevTools } from 'redux-devtools-extension';
import countriesList from './reducers/countriesList';
import theme from './reducers/theme';

const combinedReducers = combineReducers({
  countriesList,
  theme,
});

const masterReducer = (state, action) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state,
      countriesList: {
        ...action.payload.countriesList,
        allCountries: action.payload.countriesList.allCountries,
        displayedCountries: action.payload.countriesList.allCountries,
      },
    };
    return nextState;
  } else {
    return combinedReducers(state, action);
  }
};

const initStore = () =>
  createStore(masterReducer, composeWithDevTools(applyMiddleware(thunk)));

export const wrapper = createWrapper(initStore);
