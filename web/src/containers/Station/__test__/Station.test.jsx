/**
 * @jest-environment jsdom
 */
 import React from 'react';
 import * as redux from 'react-redux'
 import {BrowserRouter as Router} from 'react-router-dom';
 import { render, screen } from '@testing-library/react';
 import '@testing-library/jest-dom';
 
 import Station from '../Station';
 
 const fetchIndividualStationMock = {
   type: 'FETCH_INDIVIDUAL_STATION',
   payload: {
    id: 3,
    name: 'Stamford Bridge',
    metrics: {
      volume: 2360,
      margin: 25.88,
      profit: 611
    }
  },
 }
 
 jest.mock('../../../actions/stationActions', () => ({
  fetchIndividualStation: () => fetchIndividualStationMock,
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
     individualStation: {
      id: 3,
      name: 'Stamford Bridge',
      metrics: {
        volume: 2360,
        margin: 25.88,
        profit: 611
      }
    },
     errorFetching: '',
   },
 };

 const mockAppStateError = {
  stations: {
    stationsList: [],
    individualStation: {},
    errorFetching: 'TypeError',
  },
};
 
 const mockDispatch = jest.fn();
 jest.mock('react-redux', () => ({
   useSelector: jest.fn().mockImplementation(() => {}),
   useDispatch: () => mockDispatch,
 }));
 
 test('renders the Station component with table populated', () => {
   jest
     .spyOn(redux, 'useSelector')
     .mockImplementation((callback) => callback(mockAppState))
   render(
     <Router>
       <Station/>
     </Router>
   );
   const tableComponent = screen.getByTestId('singleStationTable__container');
   expect(tableComponent).toBeVisible();
   const rowNodeName = screen.getByText(/Stamford Bridge/i);
   expect(rowNodeName).toBeVisible();
   const rowNodeVolume = screen.getByText(/2360/i);
   expect(rowNodeVolume).toBeVisible();
 });

 test('renders the Error message when errorFetching is populated', () => {
  jest
    .spyOn(redux, 'useSelector')
    .mockImplementation((callback) => callback(mockAppStateError))
  render(
    <Router>
      <Station/>
    </Router>
  );
  const errorMessage = screen.getByText(/TypeError/i);
  expect(errorMessage).toBeVisible();
});