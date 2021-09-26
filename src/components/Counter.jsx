import React, { useState } from "react";
import "/src/styles.css";

function Counter(props) {
  const [count, setCount] = useState(props.value);

  function handleZero() {
    return count === 0 ? "Zero" : count;
  }

  function getBadgeClasses() {
    let classes = "badge text-dark m-2 bg-";
    classes += count === 0 ? "warning" : "primary";
    //check the count and then add a bootstrap class to change the badge
    return classes;
  }

  function handleIncrement() {
    setCount((prevValue) => {
      return prevValue + 1;
    });
    //Increments state by 1
  }

  return (
    <div className="App">
      <span className={getBadgeClasses()}>{handleZero()}</span>
      <button onClick={handleIncrement} className="btn btn-primary">
        Increment
      </button>
    </div>
  );
}

export default Counter;
