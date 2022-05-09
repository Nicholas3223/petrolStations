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
    name: "Stamford Bridge",
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
     individualStation: {
      id: 3,
      name: "Stamford Bridge",
      metrics: {
        volume: 2360,
        margin: 25.88,
        profit: 611
      }
    },
     errorFetching: "",
   },
 };
 
 const mockDispatch = jest.fn();
 jest.mock('react-redux', () => ({
   useSelector: jest.fn().mockImplementation(() => mockAppState),
   useDispatch: () => mockDispatch,
 }));
 
 test('renders the App component with table populated', async() => {
   jest
     .spyOn(redux, 'useSelector')
     .mockImplementation((callback) => callback(mockAppState))
   render(
     <Router>
       <Station/>
     </Router>
   );
   const rowNodeName = screen.getByText(/Stamford Bridge/i);
   expect(rowNodeName).toBeVisible();
   const rowNodeVolume = screen.getByText(/2360/i);
   expect(rowNodeVolume).toBeVisible();
 });