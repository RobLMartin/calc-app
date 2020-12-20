import { useState } from "react";
import "./App.css";

import Button from "./components/button";
import Calculation from "./components/calculation";
import AllClear from "./components/all.clear";
import Equals from "./components/equals";

function App() {
  const [calculation, setCalculation] = useState("");
  const options = [
    "7",
    "8",
    "9",
    "*",
    "4",
    "5",
    "6",
    "/",
    "1",
    "2",
    "3",
    "-",
    "0",
    "^",
    ".",
    "+",
  ];

  const renderButtons = () =>
    options.map((val) => (
      <Button onClick={() => updateCalculation(val)}>{val}</Button>
    ));

  const updateCalculation = (val) => setCalculation(calculation + val);

  const handleEvaluate = () => setCalculation(() => eval(calculation));

  return (
    <div className="App">
      <header className="App-header">
        <div className="calc-container">
          <Calculation val={calculation} />
          <div className="button-container">{renderButtons()}</div>
          <div className="other-controls">
            <AllClear onClick={() => setCalculation("")} />
            <Equals onClick={handleEvaluate} />
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
