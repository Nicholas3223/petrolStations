import axios from "axios";
import { FETCH_STATIONS, FETCH_INDIVIDUAL_STATION, FETCH_ERROR } from "../actions/types";

export const fetchStations = () => async(dispatch) => {
  try {
    const fetchedData = await axios.get('http://localhost:8080/api/stations/');
    dispatch({
      type: FETCH_STATIONS,
      payload: fetchedData.data,
    })
  } catch (err) {
    dispatch({
      type: FETCH_ERROR,
      payload: err
    })
  }
};

export const fetchIndividualStation = (id) => async(dispatch) => {
  try {
    const fetchedData = await axios.get(`http://localhost:8080/api/stations/${id}`);
    dispatch({
      type: FETCH_INDIVIDUAL_STATION,
      payload: fetchedData.data,
    });
  } catch(err) {
    console.log('err', err)
    dispatch({
      type: FETCH_ERROR,
      payload: err
    })
  }
}