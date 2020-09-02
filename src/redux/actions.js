import axios from "axios";

export const getAccents = () => {
  return async function fetchData(dispatch) {
    const result = await axios.get("./data.json");
    const accents = [...Object.values(result.data.accents)];

    //Get only UK accents
    const filteredResults = await accents.filter((accent) => {
      return accent.coords && accent.country === "gb";
    });
    dispatch({
      type: "GET_ACCENTS",
      payload: filteredResults,
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
