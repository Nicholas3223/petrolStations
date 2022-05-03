import React from 'react';
import { useParams } from 'react-router-dom';

import SingleStationTable from '../../components/SingleStationTable/SingleStationTable';
import useFetch from '../../customHooks/useFetch';
import './Station.css';

const Station = () => {

  let { id } = useParams();

  const {data, fetchError} = useFetch(`http://localhost:8080/api/stations/${id}`, {});

  return(
    <div className='stationContainer'>
      <h2>{data?.name} Station</h2>
      {Object.keys(data).length && !fetchError
      ?
        <SingleStationTable
          station={data}
        />
      :
        <h3>{fetchError}</h3>
      }
    </div>
  )
}

export default Station;
