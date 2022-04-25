import {
  SET_ALL,
  RESET_DISPLAYED,
  FILTER_BY_NAME,
  FILTER_BY_REGION,
} from './actionTypes';
import {
  FILTER_BY_NAME_ENDPOINT,
  FILTER_BY_REGION_ENDPOINT,
} from '../../constants/urls';

export const setInitialCountriesList = (list) => (dispatch) => {
  dispatch({
    type: SET_ALL,
    payload: list,
  });
};

export const resetDisplayed = () => (dispatch) => {
  dispatch({
    type: RESET_DISPLAYED,
  });
};

export const filterByName = (name) => async (dispatch) => {
  const res = await fetch(`${FILTER_BY_NAME_ENDPOINT}/${name.toLowerCase()}`);
  const data = await res.json();
  if (data.status === 404) data = [];
  dispatch({
    type: FILTER_BY_NAME,
    payload: data,
  });
};

export const filterByRegion = (region) => async (dispatch) => {
  const res = await fetch(`${FILTER_BY_REGION_ENDPOINT}/${region}`);
  const data = await res.json();
  dispatch({
    type: FILTER_BY_REGION,
    payload: data,
  });
};
