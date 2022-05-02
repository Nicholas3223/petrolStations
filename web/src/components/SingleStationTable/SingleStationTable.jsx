import React from 'react';
import './SingleStationTable.css';

const SingleStationTable = ({station}) => {

  return(
    <table className='singleStationTable__parent'>
      {
        Object.entries(station.metrics).map(([key, value]) => {
          return (
            <tr>
              <td className='singleStationTableBody__rowCell'>{key}</td>
              <td className='singleStationTableBody__rowCell'>{value}</td>
            </tr>
          )
        })
      }
    </table>
  );
};

export default SingleStationTable;
