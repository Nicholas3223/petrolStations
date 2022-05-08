import { FETCH_STATIONS, FETCH_INDIVIDUAL_STATION, FETCH_ERROR } from "../actions/types";

const initialState = {
  stationsList: [],
  individualStation: {},
  errorFetching: "",
};

export default function(state = initialState, action) {
  switch(action.type) {
    case FETCH_STATIONS:
      return {
        ...state,
        stationsList: action.payload,
      }
    case FETCH_INDIVIDUAL_STATION:
      return {
        ...state,
        individualStation: action.payload,
      }
    case FETCH_ERROR:
      return {
        ...state,
        errorFetching: action.payload.toString(),
      }
    default:
      return state;
  }
};
