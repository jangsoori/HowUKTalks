import axios from "axios";

export const getAccents = () => {
  return async function fetchData(dispatch) {
    const response = await axios.get("./db.json");
    // const accents = [...Object.values(response.data.accents)];
    dispatch({
      type: "GET_ACCENTS",
      payload: response.data.accents,
    });
  };
};
export const getAccent = (id) => {
  return async function fetchData(dispatch) {
    const response = await axios.get(`./db.json/${id}`);

    dispatch({ type: "GET_ACCENT", payload: response.data });
  };
};

export const selectAccent = (accent) => {
  return {
    type: "SELECT_ACCENT",
    payload: accent,
  };
};
