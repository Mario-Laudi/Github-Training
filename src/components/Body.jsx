import { useState } from "react";
import createSum from "./utils/createSum";

export default function Body() {
  const [currResult, setResult] = useState(0);

  return (
    <div>
      <input className="number1" type="number" />
      <input className="number2" type="number" />
      <p className="result">{currResult}</p>
      <button
        onClick={() => {
          let num1 = document.querySelector(".number1").value;
          let num2 = document.querySelector(".number2").value;
          return setResult(createSum(num1, num2));
        }}
      >
        Create sum
      </button>
    </div>
  );
}
