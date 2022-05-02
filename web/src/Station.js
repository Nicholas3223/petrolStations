import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import SingleStationTable from './components/SingleStationTable/SingleStationTable';
import useFetch from './customHooks/useFetch';
import './Station.css';

const Station = () => {

  let { id } = useParams();

  const [data] = useFetch(`http://localhost:8080/api/stations/${id}`, {});

  return(
    <div className='stationContainer'>
      <h2>{data?.name} Station</h2>
      {Object.keys(data).length && 
        <SingleStationTable
          station={data}
        />
      }
    </div>
  )
}

export default Station;
