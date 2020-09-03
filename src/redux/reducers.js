import { combineReducers } from "redux";
import _ from "lodash";
function accentsReducer(state = [], action) {
  switch (action.type) {
    case "GET_ACCENTS": {
      return { ...state, ..._.mapKeys(action.payload, "id") };
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

    default:
      return state;
  }
}

export default combineReducers({
  accents: accentsReducer,

  selectedAccent: selectedAccentReducer,
});
