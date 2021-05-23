import React from 'react';
import comingSoon from '../assets/images/ComingSoon.gif';
import "../App.css";

function Home() {
  return (
    <div>
      <header className="App-header" style={{ background: 'black' }}>
        <img src={comingSoon} data-test-id={'coming-soon-image'} alt="logo" width='50%' />
      </header>
    </div>
  );
}

export default Home;
