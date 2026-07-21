import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Addtudo } from "./Utlis/Tudo";

const App = () => {
  const dispatch = useDispatch();
  const myRef = useRef();

  const data = useSelector((state) => state.tudo);

  return (
    <div>
      <input ref={myRef} type="text" />

      <button
        onClick={() => {
          dispatch(Addtudo(myRef.current.value));
          myRef.current.value = "";
        }}
      >
        Add Text
      </button>

      <ul>
        {data.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;