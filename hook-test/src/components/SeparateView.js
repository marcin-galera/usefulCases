import React from "react";
import ChangeValueWithStore from "../hooks/ChangeValueWithStore";

const SeparateView = () => {
  const [value, setValueWithLocalStorage] = ChangeValueWithStore();

  return (
    <input
      placeholder="Type your value"
      value={value}
      onChange={(e) => setValueWithLocalStorage(e.target.value)}
    />
  );
};

export default SeparateView;
