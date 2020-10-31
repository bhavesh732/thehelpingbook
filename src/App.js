import React from 'react';
import './App.css';
import Main from './Components/MainComponent.js'
import { BrowserRouter } from 'react-router-dom';
// import $ from 'jquery';

function App() {
  return (
    <BrowserRouter>
      <Main />
    </BrowserRouter>
  );
}

export default App;
