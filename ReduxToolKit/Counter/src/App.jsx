import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "./Utils/CounterSlice";

function App() {
  const count = useSelector((state) => state.Counter);
  const dispatch = useDispatch();

  return (
    <>
       <div className="flex justify-center items-center h-screen flex-col">
            <h1 className="text-4xl font-bold mb-4">
              {count}
              </h1>

            <div>
                <button
              className="bg-blue-950 text-white font-bold text-2xl px-6 py-2"
                    onClick={() => dispatch(increment())}>+</button>
              <button
              className="bg-blue-950 text-white font-bold text-2xl px-6 py-2"
                    onClick={() => dispatch(reset())}>Reset</button>
              <button
              className="bg-blue-950 text-white font-bold text-2xl px-6 py-2"
                    onClick={() => dispatch(decrement())}>-
              </button>
            </div>
       </div>
    </>
  );
}

export default App;