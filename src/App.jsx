import * as React from "react";

import "./styles.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRotate } from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <div className="counter-container">
      <h1 className="counter-heading">Fancy Counter</h1>
      <span className="counter">0</span>
      <FontAwesomeIcon icon={faRotate} />
      <div className="counter-buttons-container">
        <button className="counter-buttons">-</button>
        <button className="counter-buttons">+</button>
      </div>
    </div>
  );
}

export default App;
