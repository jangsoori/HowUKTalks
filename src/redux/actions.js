import axios from "axios";
import accents from "../db";
export const getAccents = () => {
  return {
    type: "GET_ACCENTS",
    // payload: "fetched accents",
  };
};
export const getAccent = (id) => {
  return {
    type: "GET_ACCENT",
    payload: accents[id],
  };
};

export const selectAccent = (accent) => {
  return {
    type: "SELECT_ACCENT",
    payload: accent,
  };
};

export const clearSelectedOnUnmount = () => {
  return {
    type: "CLEAR_SELECTED_ON_UNMOUNT",
    payload: null,
  };
};
