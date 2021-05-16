import React, { Suspense } from 'react';
import { Routes } from './routes';
import { BrowserRouter } from 'react-router-dom';
import Fallback from './components/Fallback';
import './App.css';

function App() {
  return (
    <div className="App">
      <Suspense fallback={<Fallback />}>
        <BrowserRouter>
        <Routes />
      </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
