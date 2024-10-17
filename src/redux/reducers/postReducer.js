import {
  FETCH_POSTS_FAILED,
  FETCH_POSTS_STARTED,
  FETCH_POSTS_SUCCESS,
  SEARCH_POST_FAILED,
  SEARCH_POST_STARTED,
  SEARCH_POST_SUCCESS,
} from "../actions/postActionsTypes";
// initial state

const initialState = {
  loading: true,
  posts: [],
  post: {},
  error: "",
};

export const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS_STARTED:
      return {
        ...state,
        loading: true,
      };
    case FETCH_POSTS_SUCCESS:
      return {
        ...state,
        loading: false,
        posts: action.payload,
      };
    case FETCH_POSTS_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
        posts: [],
      };
    case SEARCH_POST_STARTED:
      return {
        ...state,
        loading: true,
      };
    case SEARCH_POST_SUCCESS:
      return {
        ...state,
        loading: false,
        posts: [action.payload],
      };
    case SEARCH_POST_FAILED:
      return {
        ...state,
        loading: false,
        post: {},
        error: action.payload,
      };

    default:
      return state;
  }
};
