import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import {
  decrement,
  increment,
  incrementByAmnt,
  reset,
} from "./features/counter/counterSlice";
import { useState } from "react";

function App() {
  const [amount, setAmount] = useState();

  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  function handleInc() {
    dispatch(increment());
  }
  function handleDec() {
    dispatch(decrement());
  }
  function handleReset() {
    dispatch(reset());
  }
  function handleIncByAmount() {
    dispatch(incrementByAmnt(amount));
  }
  return (
    <div className="container">
      <button onClick={handleInc}> + </button>
      <button onClick={handleDec}> - </button>
      <button onClick={handleReset}> Reset </button>
      <p>Count: {count}</p>

      <br />
      <br />
      <input
        type="Number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Enter amount"
      />
      <br />
      <button onClick={handleIncByAmount}>Inc By Amount</button>
    </div>
  );
}

export default App;
