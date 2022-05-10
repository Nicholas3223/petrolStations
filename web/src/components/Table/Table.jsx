import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import './Table.css';

const Table = ({ data, headers, navigate }) => {

  const handleClick = useCallback((id) => {
    navigate(`station/${id}`);
  });

  return(
    <table className='tableParent'>
      <thead>
        <tr>
          {headers.map((header) => <th className='tableHeader__rowCell' key={header}>{header}</th>)}
        </tr>
      </thead>
      <tbody>
        {data?.map((station) => {
          return (
            <tr className="tableBody__row" onClick={() => handleClick(station.id)} key={station.id}>
              <td className='tableBody__rowCell'>{station.name}</td>
              <td className='tableBody__rowCell'>{station.metrics.margin}</td>
              <td className='tableBody__rowCell'>{station.metrics.profit}</td>
              <td className='tableBody__rowCell'>{station.metrics.volume}</td>
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
  headers: PropTypes.arrayOf(PropTypes.string),
  navigate: PropTypes.func.isRequired,
}

export default Table