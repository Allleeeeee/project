import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Email from './Email';
import MapComponent from './MapComponent';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <Email/>
   <MapComponent/>
  </React.StrictMode>
);
