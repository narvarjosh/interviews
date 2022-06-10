import React from 'react';
import ReactDOM from 'react-dom';
import { trackingData, orderData } from './data';

console.log('trackingData', trackingData);
console.log('orderData', orderData);

function App() {
  return (
    <p>The Shipments Renderer 5000</p>
  ); 
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);