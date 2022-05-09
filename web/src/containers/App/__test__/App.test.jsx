/**
 * @jest-environment jsdom
 */
import React from 'react';
import * as redux from 'react-redux'
import * as actions from '../../../actions/stationActions';
import configureMockStore from 'redux-mock-store';
import {BrowserRouter as Router} from 'react-router-dom';
import thunk from 'redux-thunk';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import App from '../App';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const initialState = {
  stations: {
  stationsList: [],
  individualStation: {},
  errorFetching: "",
  },
};

const fetchStationsMock = {
  type: 'FETCH_STATIONS',
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
}

jest.mock('../../../actions/stationActions', () => ({
  fetchStations: () => fetchStationsMock
}));

const mockAppState = {
  stations: {
    stationsList: [
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
    individualStation: {},
    errorFetching: "",
  },
};

const store = mockStore(initialState);

const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
  useSelector: jest.fn().mockImplementation(() => mockAppState),
  useDispatch: () => mockDispatch,
}));

test('renders the App component with table populated', async() => {
  store.dispatch(actions.fetchStations('www.url.com'));
  jest
    .spyOn(redux, 'useSelector')
    .mockImplementation((callback) => callback(mockAppState))
  render(
    <Router>
      <App/>
    </Router>
  );
  console.log('store.getState', store.getState());
  const rowNode = screen.getByText(/Anfield/i);
  expect(rowNode).toBeVisible();
})