import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import expect from 'expect';
import moxios from 'moxios';

import * as actions from '../stationActions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const initialState = {
  stationsList: [],
  individualStation: {},
  errorFetching: "",
};

const store = mockStore(initialState);

describe('async actions', () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  test('returns data after correct request from fetchStations', () => {
    const stationsMockData = [
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
    ];
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: stationsMockData
      });
    });
    store.dispatch(actions.fetchStations())
      .then(() => {
        const newState = store.getState();
        expect(newState.stationsList).toBe(stationsMockData)
      });
  });

  test('returns error after failed axios.get request for stations', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 404,
        response: 'TypeError: There was an error fetching your data'
      });
    });
    store.dispatch(actions.fetchStations())
    .then(() => {
      const newState = store.getState();
      expect(newState.errorFetching).toBe('TypeError: There was an error fetching your data')
    });
  });

  test('returns data after correct request from FETCH_INDIVIDUAL_STATION', () => {
    const individualStationMockData = {
      id: 3,
      name: 'Stamford Bridge',
      metrics: {
        volume: 2360,
        margin: 25.88,
        profit: 611
      }
    }
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: individualStationMockData
      });
    });
    store.dispatch(actions.fetchIndividualStation())
      .then(() => {
        const newState = store.getState();
        expect(newState.stationsList).toBe(individualStationMockData)
      });
  });

  test('returns error after failed axios.get request for individual station', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 404,
        response: 'TypeError: There was an error fetching your station data'
      });
    });
    store.dispatch(actions.fetchIndividualStation())
    .then(() => {
      const newState = store.getState();
      expect(newState.errorFetching).toBe('TypeError: There was an error fetching your station data')
    });
  });
});
