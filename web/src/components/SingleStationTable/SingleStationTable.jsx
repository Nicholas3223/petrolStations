import React from 'react';
import PropTypes from 'prop-types';
import './SingleStationTable.css';

const SingleStationTable = ({ station }) => {
  return(
    <table className="singleStationTable__parent" data-testid="singleStationTable__container">
       <tbody>
      {
        Object.entries(station.metrics).map(([key, value], i) => {
          return (
            <tr key={i}>
              <td className="singleStationTableBody__rowCell">{key}</td>
              <td className="singleStationTableBody__rowCell">{value}</td>
            </tr>
          )
        })
      }
      </tbody>
    </table>
  );
};

SingleStationTable.propTypes = {
  station: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    metrics: PropTypes.shape({
      volume: PropTypes.number.isRequired,
      margin: PropTypes.number.isRequired,
      profit: PropTypes.number.isRequired,
    })
  })
}

export default SingleStationTable;
