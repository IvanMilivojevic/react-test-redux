const initialState = {
  letters: [],
};

const lettersReducer = (state = initialState, action) => {
  if (action.type === "LETTERS_ADD") {
    return {
      ...state,
      letters: [...action.letters],
    };
  }
  return state;
};

export default lettersReducer;
