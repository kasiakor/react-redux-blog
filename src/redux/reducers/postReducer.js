import axios from "axios";
import apiURL from "../../utils/apiURL";

// initial state

const initialState = {
  loading: true,
  posts: [],
  post: {},
  error: "",
};

// actions

// start fetch request

const fetchPostsRequest = () => {
  return {
    type: "FETCH_STARTED",
  };
};

// fetch successful
const fetchPostsSuccess = (posts) => {
  return {
    type: "FETCH_SUCCESS",
    payload: posts,
  };
};

// fetch failed
const fetchPostsFailed = (error) => {
  return {
    type: "FETCH_FAILED",
    payload: error,
  };
};

// dispatch request/async
const fetchPostsAction = () => {
  return async (dispatch) => {
    // dispatch fetch
    dispatch(fetchPostsRequest());
    try {
      //get data from the api
      const response = await axios.get(apiURL);
      // dispatch success
      dispatch(fetchPostsSuccess(response));
    } catch (error) {
      dispatch(fetchPostsFailed(error));
    }
  };
};
