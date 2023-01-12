import './App.css';
import Counter from './components/Counter.jsx'
import Button from './components/Button.jsx';
import freecodecampLogo from './images/freecodecamp-logo.png';
import {useState} from 'react';

function App() {

  const [numberOfClicks, setNumberOfClicks] = useState(0);

  const click = () => {
    setNumberOfClicks(numberOfClicks + 1);
  }

  const reload = () => {
    setNumberOfClicks(0)
  }

  return (
    <div className="App">

      <img 
        className="logo"
        src={ freecodecampLogo } 
        alt="freeCodeCamp with words and parentheses with a fireball inside, all in white" 
      />

      <Counter 
        numsOfClicks={numberOfClicks}
      />

      <Button 
        option="Click"
        isClickButton={true}
        eventHandler={click}
      />
      <Button 
        option="Reload"
        isClickButton={false}
        eventHandler={reload}
      />
    </div>
  );
}

export default App;
