const initialState = {
  theme: "light",
};

const reducer = (state = initialState, action) => {
  if (action.type === "THEME_TOGGLE") {
    const theme = state.theme === "dark" ? "light" : "dark";

    return {
      ...state,
      theme,
    };
  }
  return state;
};

export default reducer;
