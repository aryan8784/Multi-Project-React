import React, { useReducer } from "react";
import style from "../styles/FireCalculator.module.css";
import reducer from "../Reducer/reducer";
import store from "../Reducer/store";
import { handleCalculatorOnclick, handleInputOnChange } from "../Reducer/actionCreator";

const FireCalculator = () => {
  const [state, dispatch] = useReducer(reducer, store);

  return (
    <>
      <h1 style={{ textAlign: "center", marginTop: "20px", color: "red" }}>
        Fire Calculator
      </h1>
      <h2 style={{ textAlign: "center", marginTop: "20px" }}>
        How Much Money You required during retirement
      </h2>
      <div className={style.main__div}>
        <div>
          <input
            type="text"
            value={state.expToday}
            onChange={(e) =>
              dispatch(handleInputOnChange("expToday", e.target.value))
            }
            placeholder="Monthly expense as of Today"
          />
          <input
            type="text"
            value={state.curAge}
            onChange={(e) =>
              dispatch(handleInputOnChange("curAge", e.target.value))
            }
            placeholder="current age"
          />
          <input
            type="text"
            value={state.retAge}
            onChange={(e) =>
              dispatch(handleInputOnChange("retAge", e.target.value))
            }
            placeholder="retirement age"
          />
          <input
            type="text"
            value={state.infliation}
            onChange={(e) =>
              dispatch(handleInputOnChange("infliation", e.target.value))
            }
            placeholder="Infliation %"
          />
          <div>
            <button onClick={()=> dispatch(handleCalculatorOnclick(state))}>Calculate Fire</button>
          </div>
        </div>
        <div>
          <h2>Yearly Expense as of Today : {state.resYearExpToday}</h2>
          <h2>Yearly Expense as of Retirement : {state.resYearExpRet}</h2>
          <h2>Your Fire Number : {state.resFireNumber}</h2>
        </div>
      </div>
    </>
  );
};

export default FireCalculator;
