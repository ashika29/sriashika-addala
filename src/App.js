import React from 'react';
import comingSoon from './assets/images/ComingSoon.gif';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header" style={{ background: 'black' }}>
        <img src={comingSoon} data-test-id={'coming-soon-image'} alt="logo" width={1000} />
      </header>
    </div>
  );
}

export default App;
