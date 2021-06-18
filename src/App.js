import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, singIn, singOut } from "./action";

function App() {
  const counter = useSelector((state) => state.counter);
  const isLogged = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={() => dispatch(increment(5))}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>

      {isLogged ? <h3>i am loggin</h3> : <h3>log gout</h3>}
      <button onClick={() => dispatch(singIn())}>log in</button>
      <button onClick={() => dispatch(singOut())}>log out</button>
    </div>
  );
}

export default App;
