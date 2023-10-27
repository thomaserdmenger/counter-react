import * as React from "react";

import "./styles.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRotate } from "@fortawesome/free-solid-svg-icons";

function App() {
  const [counter, setCounter] = React.useState(0);

  const handleMinusClick = () => setCounter((prevCounter) => prevCounter - 1);
  const handlePlusClick = () => setCounter((prevCounter) => prevCounter + 1);

  return (
    <div className="counter-container">
      <h1 className="counter-heading">Fancy Counter</h1>
      <span className="counter">{counter}</span>
      <FontAwesomeIcon icon={faRotate} />
      <div className="counter-buttons-container">
        <button className="counter-buttons" onClick={handleMinusClick}>
          -
        </button>
        <button className="counter-buttons" onClick={handlePlusClick}>
          +
        </button>
      </div>
    </div>
  );
}

export default App;
