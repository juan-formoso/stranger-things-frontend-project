import React from 'react';
import './App.css';

import StrangerThings from './components/StrangerThings';

const development = process.env.MESSAGE;

function App() {
  return (
    <div className="App">
      {development}
      <StrangerThings />
    </div>
  );
}

export default App;
