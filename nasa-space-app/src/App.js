import React from 'react';
import HeroComponent from './HeroComponent';
import InfoComponent from './InfoComponent';

import './App.css';

function App() {
  return (
    <div className="App">
      <div class="jumbotron">
        <h1 class="jumbotron-item" >Flora Fire</h1>
        <div id='main-title-line'></div>
        <p class="jumbotron-item">What risks does your local vegetation pose for wildfires?</p>
        <p class="jumbotron-item" />
        <HeroComponent  />
      </div>

      <div className='safety-info'>
      <InfoComponent />
      </div>
    </div>
  );
}

export default App;
