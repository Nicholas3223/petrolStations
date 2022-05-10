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
  type: "FETCH_STATIONS",
  payload: [
    {
      id: 1,
      name: 'Anfield',
      metrics: {
        volume: 1526,
        margin: 20.65,
        profit: 315
      }
    },
    {
      id: 2,
      name: 'Vicarage Road',
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
        name: 'Anfield',
        metrics: {
          volume: 1526,
          margin: 20.65,
          profit: 315
        }
      },
      {
        id: 2,
        name: 'Vicarage Road',
        metrics: {
          volume: 986,
          margin: 17.99,
          profit: 177
        }
      },
    ],
    individualStation: {},
    errorFetching: '',
  },
};

const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
  useSelector: jest.fn().mockImplementation(() => {}),
  useDispatch: () => mockDispatch,
}));

test('renders the App component with table populated', () => {
  jest
    .spyOn(redux, 'useSelector')
    .mockImplementation((callback) => callback(mockAppState));
  render(
    <Router>
      <App/>
    </Router>
  );
  const tableComponent = screen.getByTestId('tableComponent__container');
  expect(tableComponent).toBeVisible();
  const rowNodeName = screen.getByText(/Anfield/i);
  expect(rowNodeName).toBeVisible();
  const rowNodeVolume = screen.getByText(/986/i);
  expect(rowNodeVolume).toBeVisible();
});
