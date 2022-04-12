import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { actions } from './store';


function App() {
  const counter = useSelector(state => state.counter);
  const addOrSubValue = useSelector(state => state.addOrSubValue)
  const dispatch = useDispatch();
  const increment = () => {
    dispatch(actions.increment());
  }
  const decrement = () => {
    dispatch(actions.decrement());
  }
  const changeAddOrSubValue = (e) => {
    dispatch(actions.changeAddOrSubValue(parseInt(e.target.value)));
  }
  const addBy = () => {
    dispatch(actions.addBy(20))
  }
  const subBy = () => {
    dispatch(actions.subBy (20))
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
