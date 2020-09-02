import { combineReducers } from "redux";

const initialState = {
  accents: [],
  selectedAccent: null,
};
function accentsReducer(state = [], action) {
  switch (action.type) {
    case "GET_ACCENTS": {
      return action.payload;
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

    default:
      return state;
  }
}
function hoveredAccentReducer(state = null, action) {
  switch (action.type) {
    case "HOVER_ACCENT": {
      return action.payload;
    }

    default:
      return state;
  }
}

export default combineReducers({
  accents: accentsReducer,
  selectedAccent: selectedAccentReducer,
  hoveredAccent: hoveredAccentReducer,
});
