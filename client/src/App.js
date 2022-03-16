import React from 'react';
import './App.css';
import LeftSide from './Layouts/LeftSide';
import MiddleSide from './Layouts/MiddleSide';
import RightSide from "./Layouts/RightSide";

function App() {
  return (
    <div className="App">
      <div className="layout-container">
        <LeftSide />
        <MiddleSide />
        <RightSide />
      </div>
    </div>
  );
}

export default App;
