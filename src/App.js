import logo from "./logo.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import {
  increament,
  decrement,
  increaseByAmount,
} from "./redux/slices/counterSlices";

function App() {
  const dispatch = useDispatch();
  const counter = useSelector(state => state?.counter);
  console.log(counter);
  return (
    <div className="App">
      <h1>Redux toolkit Counter</h1>
      <h2>Counter: {counter?.value}</h2>
      <button onClick={() => dispatch(increament())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(increaseByAmount(100))}>
        Increase By Amt
      </button>
    </div>
  );
}

export default App;
