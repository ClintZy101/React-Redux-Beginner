import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import {increment, decrement} from './actions'

function App() {
  const counter = useSelector(state => state.counter)
  const isLogged = useSelector(state => state.isLogged)
  const dispatch = useDispatch()

  return (
    <div className="App">
        <h1>Counter {counter}</h1>
        <button onClick={()=> dispatch(increment(3))}>+</button>
        <button onClick={()=> dispatch(decrement())}>-</button>
        {isLogged ? <h2>Valuable Information</h2> : <h2>Please Log In</h2>}
        
    </div>
  );
}

export default App;
