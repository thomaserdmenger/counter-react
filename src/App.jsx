import * as React from "react";

import "./styles.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRotate } from "@fortawesome/free-solid-svg-icons";

function App() {
  const [counter, setCounter] = React.useState(0);
  const [rotate, setRotate] = React.useState("reload-icon");

  const handleMinusClick = () => setCounter((prevCounter) => prevCounter - 1);
  const handlePlusClick = () => setCounter((prevCounter) => prevCounter + 1);

  const handleReloadClick = () => {
    setRotate("reload-icon-animation");
    setTimeout(() => window.location.reload(), 2000);
  };

  let heading = "Fancy Counter";

  if (counter === 5) {
    heading = "Limit! Buy Pro for > 5";
  } else if (counter > 5) {
    setCounter(5);
  }

  return (
    <div className="counter-container">
      <h1 className="counter-heading">{heading}</h1>

      <span className="counter">{counter}</span>
      <FontAwesomeIcon
        onClick={handleReloadClick}
        className={rotate}
        icon={faRotate}
      />
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
