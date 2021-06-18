const loggedReducer = (state = undefined, action) => {
  switch (action.type) {
    case "SING_IN":
      return !state;

    case "SING_OUT":
      return state;

    default:
      return !state;
  }
};
export default loggedReducer;
