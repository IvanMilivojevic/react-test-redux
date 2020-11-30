const initialState = {
  token: null,
  userId: null,
  loading: false,
  error: null,
  redirect: "/",
};

const authReducer = (state = initialState, action) => {
  if (action.type === "AUTH_START") {
    return {
      ...state,
      loading: true,
    };
  }
  if (action.type === "AUTH_SUCCESS") {
    return {
      ...state,
      ...action.payload,
      loading: false,
      error: null,
    };
  }
  if (action.type === "AUTH_FAIL") {
    return {
      ...state,
      loading: false,
      error: action.error,
    };
  }
  if (action.type === "AUTH_LOGOUT") {
    return {
      ...state,
      token: null,
      userId: null,
    };
  }
  if (action.type === "AUTH_REDIRECT") {
    return {
      ...state,
      redirect: action.path,
    };
  }
  return state;
};

export default authReducer;
