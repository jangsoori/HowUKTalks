import axios from "axios";

export const getAccents = () => {
  return async function fetchData(dispatch) {
    const result = await axios.get("./data.json");
    const accents = [...Object.values(result.data.accents)];
    dispatch({
      type: "GET_ACCENTS",
      payload: accents,
    });
  };
};

export const selectAccent = (accent) => {
  return {
    type: "SELECT_ACCENT",
    payload: accent,
  };
};
export const hoverAccent = (accent) => {
  return {
    type: "HOVER_ACCENT",
    payload: accent,
  };
};
