import {
  DATA_PAGE_LOADING,
  DATA_PAGE_SUCCESS,
  DATA_PAGE_ERROR,
  SEARCH_DATA_SUCCESS,
  STAT_DATA_SUCCESS,
  MONTH_DATA_SUCCESS,
} from "./actionTypes";
const inital_state = {
  loading: false,
  error: false,
  data: [],
  stats: [],
  solditems: "",
  unsolditems: "",
};
const reducer = (state = inital_state, action) => {
  const { type, payload } = action;
  switch (type) {
    case DATA_PAGE_LOADING:
      return { ...state, loading: true, error: false };
    case DATA_PAGE_SUCCESS:
      return { ...state, loading: false, error: false, data: payload };
    case DATA_PAGE_ERROR:
      return { ...state, loading: false, error: true };
    case SEARCH_DATA_SUCCESS:
      return { ...state, loading: false, data: payload };
    case STAT_DATA_SUCCESS:
      return { ...state, loading: false, stats: payload };
    case MONTH_DATA_SUCCESS:
      return { ...state, loading: false, data: payload };

    default:
      return state;
  }
};
export { reducer };
