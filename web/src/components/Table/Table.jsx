import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import './Table.css';

const Table = ({ data, headers }) => {
  const navigate = useNavigate();

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

export default Table