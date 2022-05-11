import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';

import handleSorting from './utils/handleSorting';
import './Table.css';

const Table = ({ data, navigate }) => {
  const [order, setOrder] = useState('asc');
  const [tableData, setTableData] = useState(data);

  const handleClick = useCallback((id) => () => {
    navigate(`station/${id}`);
  }, [navigate]);

  const populatedData = tableData.length ? tableData : data;

  return(
    <table className="tableParent" data-testid="tableComponent__container">
      <thead>
        <tr>
          <th
            className="tableHeader__rowCell"
            onClick={() => handleSorting('name', 'string', populatedData, order, setTableData, setOrder)}
          >
            Name
          </th>
          <th
            className="tableHeader__rowCell"
            onClick={() => handleSorting('margin', 'number', populatedData, order, setTableData, setOrder)}
          >
            Margin
          </th>
          <th
            className="tableHeader__rowCell"
            onClick={() => handleSorting('profit', 'number', populatedData, order, setTableData, setOrder)}
          >
            Profit
          </th>
          <th
            className="tableHeader__rowCell"
            onClick={() => handleSorting('volume', 'number', populatedData, order, setTableData, setOrder)}
          >
            Volume
          </th>
        </tr>
      </thead>
      <tbody>
        {populatedData?.map((station) => {
          return (
            <tr className="tableBody__row" onClick={handleClick(station.id)} key={station.id}>
              <td className="tableBody__rowCell">{station.name}</td>
              <td className="tableBody__rowCell">{station.metrics.margin}</td>
              <td className="tableBody__rowCell">{station.metrics.profit}</td>
              <td className="tableBody__rowCell">{station.metrics.volume}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

Table.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    metrics: PropTypes.shape({
      volume: PropTypes.number.isRequired,
      margin: PropTypes.number.isRequired,
      profit: PropTypes.number.isRequired,
    })
  })),
  navigate: PropTypes.func.isRequired,
}

export default Table;
