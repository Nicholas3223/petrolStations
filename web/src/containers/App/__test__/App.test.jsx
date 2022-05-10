/**
 * @jest-environment jsdom
 */
import React from 'react';
import * as redux from 'react-redux'
import {BrowserRouter as Router} from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import App from '../App';

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

const mockDispatch = jest.fn();
// TODO try to undo the jest.mock of react-redux at the end of the test
jest.mock('react-redux', () => ({
  useSelector: jest.fn().mockImplementation(() => mockAppState),
  useDispatch: () => mockDispatch,
}));

test('renders the Station component with table populated', async() => {
  jest
    .spyOn(redux, 'useSelector')
    .mockImplementation((callback) => callback(mockAppState))
  render(
    <Router>
      <App/>
    </Router>
  );
  const rowNodeName = screen.getByText(/Anfield/i);
  expect(rowNodeName).toBeVisible();
  const rowNodeVolume = screen.getByText(/986/i);
  expect(rowNodeVolume).toBeVisible();
});
