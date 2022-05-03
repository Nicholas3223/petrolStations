import {render, screen} from '@testing-library/react';
import * as React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import App from '../App';

test('Renders the App component', () => {
  render(
    <Router>
        <Routes>   
            <Route path="/" element= {<App/>}/>
        </Routes>
    </Router>
  );

  const title = screen.getByText(/Train Stations/i);
  expect(title).toBeVisible();
});