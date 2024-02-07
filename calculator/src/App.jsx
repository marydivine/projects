// Import necessary dependencies
import React, { useState } from 'react';
import './App.css'; // Import CSS file for styling (create App.css in the same directory)

// Define functional component App
function App() {
  // State variables
  const [expression, setExpression] = useState('');
  const [result, setResult] = useState('');

  // Function to handle button click events
  const handleClick = (value) => {
    if (value === '=') {
      try {
        setResult(eval(expression));
      } catch (error) {
        setResult('Error');
      }
    } else if (value === 'C') {
      setExpression('');
      setResult('');
    } else {
      setExpression((prevExpression) => prevExpression + value);
    }
  };

  return (
    <div className="calculator">
      {/* Display */}
      <div className="display">
        <input type="text" value={expression} readOnly />
        <span>{result}</span>
      </div>

      {/* Buttons */}
      <div className="buttons">
        <button onClick={() => handleClick('7')}>7</button>
        <button onClick={() => handleClick('8')}>8</button>
        <button onClick={() => handleClick('9')}>9</button>
        <button onClick={() => handleClick('+')}>+</button>
        <button onClick={() => handleClick('4')}>4</button>
        <button onClick={() => handleClick('5')}>5</button>
        <button onClick={() => handleClick('6')}>6</button>
        <button onClick={() => handleClick('-')}>-</button>
        <button onClick={() => handleClick('1')}>1</button>
        <button onClick={() => handleClick('2')}>2</button>
        <button onClick={() => handleClick('3')}>3</button>
        <button onClick={() => handleClick('*')}>*</button>
        <button onClick={() => handleClick('C')}>C</button>
        <button onClick={() => handleClick('0')}>0</button>
        <button onClick={() => handleClick('=')}>=</button>
        <button onClick={() => handleClick('/')}>/</button>
      </div>
    </div>
  );
}

// Export the App component
export default App;
