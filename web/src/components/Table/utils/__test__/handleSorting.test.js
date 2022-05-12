import handleSorting from '../handleSorting';
import { testData } from './testData';

const setTableData = jest.fn();
const setOrder = jest.fn();

test('sorts data in order by name ascending', () => {
  handleSorting('name', 'string', testData.originalData, 'asc', setTableData, setOrder);
  expect(setTableData).toHaveBeenCalledWith(testData.nameSortedAsc);
  expect(setOrder).toHaveBeenCalledWith('dsc');
});

test('sorts data in order by name descending', () => {
  handleSorting('name', 'string', testData.originalData, 'dsc', setTableData, setOrder);
  expect(setTableData).toHaveBeenCalledWith(testData.nameSortedDsc);
  expect(setOrder).toHaveBeenCalledWith('asc');
});

test('sorts data in order by profit ascending', () => {
  handleSorting('profit', 'number', testData.originalData, 'asc', setTableData, setOrder);
  expect(setTableData).toHaveBeenCalledWith(testData.profitSortedAsc);
  expect(setOrder).toHaveBeenCalledWith('dsc');
});

test('sorts data in order by profit descending', () => {
  handleSorting('profit', 'number', testData.originalData, 'dsc', setTableData, setOrder);
  expect(setTableData).toHaveBeenCalledWith(testData.profitSortedDsc);
  expect(setOrder).toHaveBeenCalledWith('asc');
});
