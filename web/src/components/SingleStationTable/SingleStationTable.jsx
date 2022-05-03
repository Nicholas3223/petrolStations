import React from 'react';
import './SingleStationTable.css';

const SingleStationTable = ({station}) => {
  return(
    <table className='singleStationTable__parent'>
       <tbody>
      {
        Object.entries(station.metrics).map(([key, value], i) => {
          return (
            <tr key={i}>
              <td className='singleStationTableBody__rowCell'>{key}</td>
              <td className='singleStationTableBody__rowCell'>{value}</td>
            </tr>
          )
        })
      }
      </tbody>
    </table>
  );
};

export default SingleStationTable;
