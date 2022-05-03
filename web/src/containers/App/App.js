import React from 'react';

import Table from '../../components/Table/Table';
import useFetch from '../../customHooks/useFetch';
import './App.css';

const tableHeaders = ["Name", "Margin", "Profit", "Volume"];

function App() {

  const {data} = useFetch('http://localhost:8080/api/stations/', []);

  return (
    <div className="App">
      <h2>Train Stations</h2>
      <Table
        data={data}
        headers={tableHeaders}
      />
    </div>
  );
}

export default App;
