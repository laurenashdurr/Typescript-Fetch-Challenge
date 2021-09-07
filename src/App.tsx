import React from 'react';
import './App.css';

import Geolocation from './common/Geolocation';


const App: React.FunctionComponent = () => {
  return (
    <div className="App">
      <Geolocation />
    </div>
  );
}

export default App;
