import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import './index.css';
import App from './containers/App/App';
import Station from './containers/Station/Station';
import store from './store';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(  
  <React.StrictMode>
  <Provider store={store}>
    <Router>
      <Routes>
        <Route exact path="/" element={<App/>} />
        <Route path="/station/:id" element={<Station/>} />
      </Routes> 
    </Router>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
