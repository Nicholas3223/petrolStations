import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import SingleStationTable from '../../components/SingleStationTable/SingleStationTable';
import { fetchIndividualStation } from '../../actions/stationActions';
import './Station.css';

const Station = (props) => {
  const dispatch = useDispatch();
  const { individualStation, errorFetching } = useSelector((state) => state.stations);

  let { id } = useParams();

  useEffect(() => {
    dispatch(fetchIndividualStation(id));
  }, [])

  return(
    <div className='stationContainer'>
      <h2>{individualStation?.name} Station</h2>
      {Object.keys(individualStation).length && !errorFetching
      ?
        <SingleStationTable
          station={individualStation}
        />
      :
        <h3>{errorFetching}</h3>
      }
    </div>
  )
}

export default Station;
