/** @jest-environment jsdom */
import * as React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { useSelector } from 'react-redux';
import renderer from 'react-test-renderer';

import { configureStore } from '@reduxjs/toolkit';
import { render, screen } from '../../../test-utils';

import rootReducer from '../../../reducers';
import * as actions from '../../../actions/stationActions';
import App from '../App';
import store from '../../../store';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const initialState = {
  stations: {
    stationsList: [],
    individualStation: {},
    errorFetching: "",
  },
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


const fetchStationsMock = {
  type: 'FETCH_STATIONS ',
  payload: [
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
  ],
};

// jest.mock('../../../actions/stationActions', () => ({
//   fetchStations: () => fetchStationsMock
// }));


// jest.mock('react-redux', () => ({
//   useSelector: jest.fn().mockImplementation(selector => selector()),
// }));

// jest.mock('./selectors.js', () => ({
//   stations: jest.fn().mockReturnValue({ stationsList: stationsMockData }),
// }));
// jest.mock('react-redux', () => ({
//   useSelector: jest.fn(),
// }));
jest.mock('../../../actions/stationActions', () => ({
  ...(jest.requireActual('../../../actions/stationActions')),
  fetchStations: jest.fn().mockImplementation(() => Promise.resolve((fetchStationsMock)))
}));




test('Renders the App component', async () => {
  // mock the state returned in useSelector??
  // await store.dispatch(actions.fetchStations());
  // console.log('actionssss', actions);
  actions.fetchStations.mockReturnValue(stationsMockData);
  console.log('store.getState', store.getState());

  render(
      <Router>
        <Routes>   
          <Route path="/" element= {<App/>}/>
        </Routes>
      </Router>
  );

  const title = screen.getByText(/Train Stations/i);
  expect(title).toBeVisible();
});
