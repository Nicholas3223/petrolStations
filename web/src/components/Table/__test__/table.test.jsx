/**
 * @jest-environment jsdom
 */
import { Provider } from 'react-redux';
import React from 'react';

import { render, screen } from '@testing-library/react';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import '@testing-library/jest-dom';

import Table from '../Table';

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

const headers = ["Name", "Margin", "Profit", "Volume"];

const store = mockStore(initialState);

test('renders the table with correct data', () => {
  render(
    <Provider store={store}>
      <Table data={stationsMockData} headers={headers} navigate={() => {}}/>
    </Provider>
  )
  const rowNodeName = screen.getByText(/Anfield/i);
  expect(rowNodeName).toBeVisible();
  const rowNodeVolume = screen.getByText(/1526/i);
  expect(rowNodeVolume).toBeVisible();
});