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

// FETCH ALL POSTS
// start fetch request

const fetchPostsRequest = () => {
  return {
    type: "FETCH_POSTS_STARTED",
  };
};

// fetch successful
const fetchPostsSuccess = (posts) => {
  return {
    type: "FETCH_POSTS_SUCCESS",
    payload: posts,
  };
};

// fetch failed
const fetchPostsFailed = (error) => {
  return {
    type: "FETCH_POSTS_FAILED",
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
      dispatch(fetchPostsSuccess(response.data));
    } catch (error) {
      dispatch(fetchPostsFailed(error));
    }
  };
};

// FETCH A SINGLE POST
// start fetch request

const fetchPostRequest = () => {
  return {
    type: "FETCH_POST_STARTED",
  };
};

// fetch successful
const fetchPostSuccess = (post) => {
  return {
    type: "FETCH_POST_SUCCESS",
    payload: post,
  };
};

// fetch failed
const fetchPostFailed = (error) => {
  return {
    type: "FETCH_POSTS_FAILED",
    payload: error,
  };
};

// dispatch request/async
const fetchPostAction = (id) => {
  return async (dispatch) => {
    // dispatch fetch
    dispatch(fetchPostRequest());
    try {
      //get data from the api
      const response = await axios.get(`apiURL/${id}`);
      // dispatch success
      dispatch(fetchPostSuccess(response.data));
    } catch (error) {
      dispatch(fetchPostFailed(error));
    }
  };
};
