import React from 'react';
import ButtonComponent from './ButtonComponent';
import InfoComponent from './InfoComponent';
import LocalDataComponent from './LocalDataComponent';
import './App.css';

function App() {
  return (
    <div className="App">
      <div class="jumbotron">
        <h1 class="jumbotron-item">App Name Here</h1>
        <p class="jumbotron-item">Click the button below to find out the risk your local vegetation poses for wildfires!</p>
        <p class="jumbotron-item">
          <ButtonComponent  class="btn btn-primary btn-lg"/>
        </p>
      </div>

      <LocalDataComponent />
      <InfoComponent />
    </div>
  );
}

export default App;
