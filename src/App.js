import './App.css';
import {Grocery} from './Grocery.js';
import {useState, useRef} from 'react';

function App() {

  const [groceries, setGroceries] = useState(["Bread", "Bananas"]);
  const textInput = useRef(null);

  function onButtonClick() {
    let newItem = textInput.current.value;
    let newGroceries = [...groceries, newItem];
    setGroceries(newGroceries);
    textInput.current.value = "";
  }
  return (
    <div>
      <input ref={textInput} type="text" data-testid="input-field"/>
      <button onClick={onButtonClick}>Add an item</button>
      <ul>
        {groceries.map(i => <Grocery item={i}/>)}
      </ul>
    </div>
  );
}

export default App;