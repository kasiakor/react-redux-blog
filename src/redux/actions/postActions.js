import axios from "axios";
import apiURL from "../../utils/apiURL";
import {
  FETCH_POSTS_FAILED,
  FETCH_POSTS_STARTED,
  FETCH_POSTS_SUCCESS,
  SEARCH_POST_FAILED,
  SEARCH_POST_STARTED,
  SEARCH_POST_SUCCESS,
} from "./postActionsTypes";

// actions

// FETCH ALL POSTS
// start fetch request

const fetchPostsRequest = () => {
  return {
    type: FETCH_POSTS_STARTED,
  };
};

// fetch successful
const fetchPostsSuccess = (posts) => {
  return {
    type: FETCH_POSTS_SUCCESS,
    payload: posts,
  };
};

// fetch failed
const fetchPostsFailed = (error) => {
  return {
    type: FETCH_POSTS_FAILED,
    payload: error,
  };
};

// dispatch request/async
export const fetchPostsAction = () => {
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
    type: SEARCH_POST_STARTED,
  };
};

// fetch successful
const fetchPostSuccess = (post) => {
  return {
    type: SEARCH_POST_SUCCESS,
    payload: post,
  };
};

// fetch failed
const fetchPostFailed = (error) => {
  return {
    type: SEARCH_POST_FAILED,
    payload: error,
  };
};

// dispatch request/async
export const fetchPostAction = (id) => {
  return async (dispatch) => {
    // dispatch fetch
    dispatch(fetchPostRequest());
    try {
      //get data from the api
      const response = await axios.get(`${apiURL}/${id}`);

      // dispatch success
      dispatch(fetchPostSuccess(response.data));
    } catch (error) {
      dispatch(fetchPostFailed(error));
    }
  };
};
