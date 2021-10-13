import React, { useState, useRef, useEffect } from "react";
import { useClickOutside } from "./helpers/useClickOutside";

import "./App.css";
import Modal from "./Modal";

function App() {
  const [showModal, setShowModal] = useState(false);
  const ref = useRef();
  useClickOutside(ref, () => setShowModal(false));

  return (
    <div className="App">
      {showModal && <Modal myRef={ref} />}
      <button onClick={() => setShowModal(true)}>show Modal</button>
      <div>asd</div>
    </div>
  );
}

export default App;
