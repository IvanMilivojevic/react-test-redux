const initialState = {
  theme: "light",
};

const themeReducer = (state = initialState, action) => {
  if (action.type === "THEME_TOGGLE") {
    const theme = state.theme === "dark" ? "light" : "dark";

    return {
      ...state,
      theme,
    };
  }
  return state;
};

export default themeReducer;
