const initialState = {
  posts: [],
};

const postsReducer = (state = initialState, action) => {
  if (action.type === "POSTS_FETCHED") {
    return {
      ...state,
      posts: action.posts,
    };
  }
  return state;
};

export default postsReducer;
