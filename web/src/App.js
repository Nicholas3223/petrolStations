import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import Table from './components/Table/Table';
import './App.css';

const tableHeaders = ["Name", "Margin", "Profit", "Volume"];

function App() {
  const [stationsData, setStationsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const newData = await fetch('http://localhost:8080/api/stations/')
        console.log('newData', newData);
        fetch('http://localhost:8080/api/stations/')
          .then((response) => response.json())
          .then((data) => setStationsData(data));
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="App">
      <h2>Train Stations</h2>
      <Table
        data={stationsData}
        headers={tableHeaders}
      />
    </div>
  );
}

export default App;
