import * as types from '../../actions/types';

import stationsReducer from '../stationsReducer';

const initialState = {
  stationsList: [],
  individualStation: {},
  errorFetching: "",
};

const stationsMockData = [
  {
    id: 1,
    name: "Anfield",
    metrics: {
      volume: 1526,
      margin: 20.65,
      profit: 315
    }
  },
  {
    id: 2,
    name: "Vicarage Road",
    metrics: {
      volume: 986,
      margin: 17.99,
      profit: 177
    }
  },
];

const individualStationMockData = {
  id: 3,
  name: "Stamford Bridge",
  metrics: {
    volume: 2360,
    margin: 25.88,
    profit: 611
  }
}

test('Reducer returns the initial state', () => {
  expect(stationsReducer(undefined, {})).toEqual(initialState);
})

test('Handles FETCH_STATIONS', () => {
  expect(
    stationsReducer([], {
      type: types.FETCH_STATIONS,
      payload: stationsMockData,
    })
  ).toEqual({
    stationsList: stationsMockData,
  })
});

test('Handles FETCH_INDIVIDUAL_STATION', () => {
  expect(
    stationsReducer([], {
      type: types.FETCH_INDIVIDUAL_STATION,
      payload: individualStationMockData,
    })
  ).toEqual({
    individualStation: individualStationMockData,
  })
});

test('Handles FETCH_ERROR', () => {
  expect(
    stationsReducer([], {
      type: types.FETCH_ERROR,
      payload: 'TypeError: error fetching data',
    })
  ).toEqual({
    errorFetching: 'TypeError: error fetching data',
  })
});