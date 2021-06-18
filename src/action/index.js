export const increment = (nr) => {
  return {
    type: "INCREMENT",
    payload: nr,
  };
};
export const decrement = () => {
  return {
    type: "DECREMENT",
  };
};

export const singIn = () => {
  return {
    type: "SING_IN",
  };
};

export const singOut = () => {
  return {
    type: "SING_OUT",
  };
};
