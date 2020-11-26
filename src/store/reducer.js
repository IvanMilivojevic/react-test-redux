const initialState = {
  theme: "light",
  letters: [],
};

const reducer = (state = initialState, action) => {
  if (action.type === "THEME_TOGGLE") {
    const theme = state.theme === "dark" ? "light" : "dark";

    return {
      ...state,
      theme,
    };
  }
  if (action.type === "LETTERS_ADD") {
    return {
      ...state,
      letters: [...action.letters],
    };
  }
  return state;
};

export default reducer;
