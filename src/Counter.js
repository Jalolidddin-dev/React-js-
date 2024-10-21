import { type } from "@testing-library/user-event/dist/type";
import React, { useReducer, useState } from "react";
import { Button, ButtonGroup } from "react-bootstrap";

function Counter() {
  //   const [count, setCount] = useState(0);

  //   const increment = () => {
  //     setCount(count + 1);
  //   };
  //   const decrement = () => {
  //     setCount(count - 1);
  //   };

  const reducer = (state, action) => {
    if (action.type === "decrement") {
      return state - 1;
    } else if (action.type === "increment") {
      return state + 1;
    }

    return state;
  };

  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <div>
      <ButtonGroup aria-label="Basic example">
        <Button
          onClick={() => dispatch({ type: "decrement" })}
          variant="secondary"
        >
          -
        </Button>
        <Button variant="primary">{count}</Button>
        <Button
          onClick={() => dispatch({ type: "increment" })}
          variant="secondary"
        >
          +
        </Button>
      </ButtonGroup>
    </div>
  );
}

export default Counter;
