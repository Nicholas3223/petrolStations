import handleSorting from '../handleSorting';

const originalData = [
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
  {
    id: 3,
    name: "Stamford Bridge",
    metrics: {
      volume: 2360,
      margin: 25.88,
      profit: 611
    }
  },
  {
    id: 4,
    name: "Emirates Stadium",
    metrics: {
      volume: 1905,
      margin: 17.08,
      profit: 325
    }
  },
];

const nameSorted =  [
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
    id: 4,
    name: "Emirates Stadium",
    metrics: {
      volume: 1905,
      margin: 17.08,
      profit: 325
    }
  },
  {
    id: 3,
    name: "Stamford Bridge",
    metrics: {
      volume: 2360,
      margin: 25.88,
      profit: 611
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

const setTableData = jest.fn();
const setOrder = jest.fn();

test('sorts data in order by name', () => {
  handleSorting('name', 'string', originalData, 'asc', setTableData, setOrder);
  expect(setTableData).toHaveBeenCalledWith(nameSorted);
  expect(setOrder).toHaveBeenCalledWith('dsc');
});