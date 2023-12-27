import { useReducer, useState } from "react";
import "../../App.css";

const Counter = () => {
  // useReduxer ->Hook -> Function
  // ye leta hai arguments-> 1st reducer(Function) or 2nd is initial state(Object)
  // useReducer Returns array [1st state , 2nd is dispatch function]

  // reducer is a Function
  const reducer = (state, action) => {
     switch (action.type) {
      case "ADD_COUNT":
        return{ count: state.count + 1}
     
        case "REDUCE_COUNT":
          return{ count: state.count - 1}

          default : 
          return state
     
     }
  };

  // intial state is a Object
  const store = {
    count: 0,
  };

  // useReducer Syntax
  const [state, dispatch] = useReducer(reducer, store);

  return (
    <>
      <div className="counter">
        <h1 className="counterH1">Counter App</h1>
        <h3 className="counterH3">Counter - {state.count}</h3>
        <button
          onClick={() => dispatch({ type: "ADD_COUNT" })}
          className="counterbutton"
          // disabled={}
          style={{ margin: "10px" }}
        >
          Add Count
        </button>
        <button
          onClick={() => dispatch({ type: "REDUCE_COUNT" })}
          className="counterbutton"
          // disabled={}
        >
          Reduce Count
        </button>
      </div>
    </>
  );
};

export default Counter;
