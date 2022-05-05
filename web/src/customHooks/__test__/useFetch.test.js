import React from 'react';
import {render, cleanup} from '@testing-library/react';
import useFetch from '../usefetch';

// can insert return object as the val??

const returnData = [
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
]

const App = ({ children, ...rest }) => children(useFetch(rest));

const setup = () => {
  let returnVal;
    render(<App>{val => {
      // mock http request
      val.data = returnData;
      returnVal = val
      return null;
    }}</App>)
  return returnVal;
}

afterEach(cleanup);

test('Data value returns with correct http request', () => {
  const { data, error } = setup();
  console.log('fetchData', data);
})