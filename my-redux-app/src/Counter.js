import { SetCounter } from "./setCounter";
import { useCounter } from "./redux/hook/useCounter";
import { useName } from "./redux/hook/useName";
import { useState } from "react";

export const Counter = () => {
  const incident = "Incident";
  const { count, increment, decrement, set } = useCounter();
  const { name, setName, age } = useName();
  const [nameLocal, setNameLocal] = useState(name);

  const handleChangeInput = (e) => {
    setNameLocal(e.target.value);
  };

  const changeName = () => {
    setName(nameLocal);
  };

  return (
    <main className="Counter">
      <div>{name}</div>
      <div>wiek: {age}</div>
      <input onChange={handleChangeInput} />
      <button onClick={changeName}>zmień name</button>
      <h1>Days Since Last {incident}</h1>
      <p className="count">{count}</p>
      <section className="controls">
        <button onClick={() => increment()}>Increment</button>
        <button onClick={() => set(0)}>Reset</button>
        <button onClick={() => decrement()}>Decrement</button>
      </section>
      <SetCounter />
    </main>
  );
};

export default Counter;
