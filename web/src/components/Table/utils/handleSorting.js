const handleSorting = (column, type, sortData, order, setTableData, setOrder) => {
  if(order === 'asc') {
    const sorted = [...sortData].sort((a, b) => {
      if(type === 'number') {
        return  a.metrics[column] - b.metrics[column];
      }
      return a[column] > b[column] ? 1 : -1;
    })
    setTableData(sorted);
    setOrder('dsc');
  } else {
    const sorted = [...sortData].sort((a, b) => {
      if(type === 'number'){
        return  b.metrics[column] - a.metrics[column]
      }
      return a[column] < b[column] ? 1 : -1;
    })
    setTableData(sorted);
    setOrder('asc');
  }
};

export default handleSorting;
