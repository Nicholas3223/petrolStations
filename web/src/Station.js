import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import SingleStationTable from './components/SingleStationTable/SingleStationTable';
import './Station.css';

const Station = () => {
  const [singleStation, setSingleStation] = useState();
  let { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        fetch(`http://localhost:8080/api/stations/${id}`)
          .then((response) => response.json())
          .then((data) => setSingleStation(data));
      } catch (err) {
        console.log(err);
      }
    }
    fetchData()
  }, []);

  return(
    <div className='stationContainer'>
      <h2>{singleStation?.name} Station</h2>
      {singleStation && 
        <SingleStationTable
          station={singleStation}
        />
      }
    </div>
  )
}

export default Station;
