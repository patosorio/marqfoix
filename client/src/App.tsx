import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Main from './pages/Main';

const App: React.FC = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;