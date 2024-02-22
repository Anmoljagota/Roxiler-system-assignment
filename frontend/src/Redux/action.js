import {
  DATA_PAGE_LOADING,
  DATA_PAGE_SUCCESS,
  DATA_PAGE_ERROR,
  SEARCH_DATA_SUCCESS,
  STAT_DATA_SUCCESS,
  MONTH_DATA_SUCCESS,
} from "./actionTypes";
import axios from "axios";
const AllData = (page, limit) => (dispatch) => {
  dispatch({ type: DATA_PAGE_LOADING });
  return axios
    .get(
      `https://weak-dog-waistcoat.cyclic.app/items?page=${page}&limit=${limit}`
    )
    .then((res) => {
      console.log(res.data, "paginationnn");
      dispatch({ type: DATA_PAGE_SUCCESS, payload: res.data });
    })
    .catch((error) => {
      dispatch({ type: DATA_PAGE_ERROR });
    });
};

const Searching_Data = (data) => (dispatch) => {
  const { value } = data;
  console.log("i am data action", value);
  return axios
    .get(`https://weak-dog-waistcoat.cyclic.app/items?q=${value}`)
    .then((res) => {
      dispatch({ type: SEARCH_DATA_SUCCESS, payload: res.data });
    });
};

const Accoding_Month = (data) => (dispatch) => {
  return axios
    .get(`https://weak-dog-waistcoat.cyclic.app/items?month=${data}`)
    .then((res) => {
      dispatch({ type: MONTH_DATA_SUCCESS, payload: res.data });
    });
};

const STATE = (data) => (dispatch) => {
  return axios
    .get(`https://weak-dog-waistcoat.cyclic.app/Statistics?month=${data}`)
    .then((res) => {
      dispatch({ type: STAT_DATA_SUCCESS, payload: res.data });
    });
};

export { AllData, Searching_Data, STATE, Accoding_Month };
