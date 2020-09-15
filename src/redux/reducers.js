import { combineReducers } from "redux";
import accents from "../db";
function accentsReducer(state = accents, action) {
  switch (action.type) {
    case "GET_ACCENTS": {
      return accents;
    }

    default:
      return state;
  }
}

function selectedAccentReducer(state = null, action) {
  switch (action.type) {
    case "SELECT_ACCENT": {
      return action.payload;
    }
    case "GET_ACCENT": {
      return action.payload;
    }
    case "CLEAR_SELECTED_ON_UNMOUNT": {
      return action.payload;
    }

    default:
      return state;
  }
}

export default combineReducers({
  accents: accentsReducer,

  selectedAccent: selectedAccentReducer,
});
