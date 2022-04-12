import './App.css';
import { useSelector, useDispatch } from 'react-redux';


function App() {
  const counter = useSelector(state => state.counter);
  const addOrSubValue = useSelector(state => state.addOrSubValue)
  const dispatch = useDispatch();
  const increment = () => {
    dispatch({type: 'INC'});
  }
  const decrement = () => {
    dispatch({type: 'DEC'});
  }
  const changeAddOrSubValue = (e) => {
    dispatch({type: 'addOrSubValue', payload: parseInt(e.target.value)});
  }
  const addBy = () => {
    dispatch({type: "ADD"})
  }
  const subBy = () => {
    dispatch({type: "SUB"})
  }
  
  return (
    <div className="App">
      <h1>Counter App</h1>
      <h2>{counter}</h2>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <br />
      <input type="number" placeholder='add/subtract by' defaultValue={addOrSubValue} onChange={changeAddOrSubValue} />
      <button onClick={addBy}>Add</button>
      <button onClick={subBy}>Subtract</button>
    </div>
  );
}

export default App;
