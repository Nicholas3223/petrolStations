import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import Table from '../../components/Table/Table';
import { fetchStations } from '../../actions/stationActions';
import './App.css';

function App() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { stationsList } = useSelector((state) => state.stations);

  useEffect(() => {
    dispatch(fetchStations());
  }, [dispatch]);

  return (
    <div className="App">
      <h2>Petrol Stations</h2>
      <Table
        data={stationsList}
        navigate={navigate}
      />
    </div>
  );
}

export default App;
