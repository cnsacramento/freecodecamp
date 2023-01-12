import './App.css';
import freecodecampLogo from './assets/images/freecodecamp-logo.png'
import Screen from './components/Screen';
import Button from './components/Button';
import ClearButton from './components/ClearButton';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {

  const [input, setInput] = useState('');

  const addInput = value => { setInput(input + value); }

  function calculateResult() {

    if (input) {
      setInput(evaluate(input));
    } else {
      alert("You should probably do an operation before")
    }
  }

  function removeLastInput() {
    setInput(input.substring(0, input.length - 1));
  }

  return (
    <div className="App">

      <img
        className="freecodecamp-logo"
        src={freecodecampLogo}
        alt="Freecodecamp logo" />

      <div className="calculator">


        <Screen input={input} />

        <div className="keypad">
          <Button eventHandler={addInput}>1</Button>
          <Button eventHandler={addInput}>2</Button>
          <Button eventHandler={addInput}>3</Button>
          <Button eventHandler={addInput}>+</Button>

          <Button eventHandler={addInput}>4</Button>
          <Button eventHandler={addInput}>5</Button>
          <Button eventHandler={addInput}>6</Button>
          <Button eventHandler={addInput}>-</Button>

          <Button eventHandler={addInput}>7</Button>
          <Button eventHandler={addInput}>8</Button>
          <Button eventHandler={addInput}>9</Button>
          <Button eventHandler={addInput}>*</Button>

          <Button eventHandler={addInput}>.</Button>
          <Button eventHandler={addInput}>0</Button>
          <Button eventHandler={calculateResult}>=</Button>
          <Button eventHandler={addInput}>/</Button>
        </div>

        <div className="clear-buttons">

          <ClearButton eventHandler={() => setInput('')}>
            Clear
          </ClearButton>
          <ClearButton eventHandler={() => removeLastInput()}>
            Del
          </ClearButton>

        </div>


      </div>

    </div>
  );
}

export default App;
