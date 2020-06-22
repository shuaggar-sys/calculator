import React from 'react';
import { AiFillCalculator } from 'react-icons/ai'
import './CSS/App.css';
import Calculator from './Components/CalculatorHolder';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AiFillCalculator className="App-logo" alt="logo" size="100px"/>
        <p>
          Calculator
        </p>
      </header>
      <AiFillCalculator size="80px"/>
      <Calculator/>
    </div>
  );
}

export default App;
