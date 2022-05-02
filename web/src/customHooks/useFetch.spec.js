import fetchData from './fetchData';

const fetchMock = jest
  .spyOn(global, 'fetch')
  .mockImplementation(() =>
    Promise.resolve({ json: () => Promise.resolve([]) })
);

test('returns the correct response given url', async () => {
  const response = {
    id: 3,
    name: "Stamford Bridge",
    metrics: {
        volume: 2360,
        margin: 25.88,
        profit: 611
    }
};

const url = 'http://localhost:8080/api/stations/2';
const json = await fetchData(url);
console.log('jsonnnnn', json)
expect(fetchMock).toHaveBeenCalledWith(
  'http://localhost:8080/api/stations/2'
);
expect(json.length).toEqual(0)
// expect(fetchFunction).toEqual(response);
});