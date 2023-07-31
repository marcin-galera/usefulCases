import { useEffect, useState } from "react";

const ChangeValueWithStore = () => {
  const [value, setValue] = useState("");

  const setValueWithLocalStorage = (value) => {
    localStorage.setItem("value", value);
    setValue(value);
  };

  useEffect(() => {
    const valueFromLocalStorage = localStorage.getItem("value");
    setValue(valueFromLocalStorage);
  }, []);

  return [value, setValueWithLocalStorage];
};

export default ChangeValueWithStore;
