import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

const domContainer = 
document.querySelector('#flashcard_container');
const root = ReactDOM.createRoot(domContainer);
root.render(e())
