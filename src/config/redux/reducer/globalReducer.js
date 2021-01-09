const initialState = {
  name: "lutfi",
};

const globalReducer = (state = initialState, action) => {
  if (action.type === "UPDATE_NAME") {
    return {
      ...state,
      name: "HAYU",
    };
  }
  return state;
};

export default globalReducer;
