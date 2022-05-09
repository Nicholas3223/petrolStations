/**
 * @jest-environment jsdom
 */
import { Provider } from 'react-redux';
import React from 'react';

import { render, screen } from '@testing-library/react';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import '@testing-library/jest-dom';

import SingleStationTable from '../SingleStationTable';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const initialState = {
  stations: {
  stationsList: [],
  individualStation: {},
  errorFetching: "",
  },
};

const individualStationMockData = {
  id: 3,
  name: "Stamford Bridge",
  metrics: {
    volume: 2360,
    margin: 25.88,
    profit: 611
  }
}

const store = mockStore(initialState);

test('renders the table', () => {
  render(
    <Provider store={store}>
      <SingleStationTable station={individualStationMockData}/>
    </Provider>
  )
  const rowNodeKey = screen.getByText(/margin/i);
  expect(rowNodeKey).toBeVisible();
  const rowNodeValue = screen.getByText(/2360/i);
  expect(rowNodeValue).toBeVisible();
});
