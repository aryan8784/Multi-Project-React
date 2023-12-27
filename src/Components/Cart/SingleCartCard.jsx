import React, { useContext } from "react";
import { handleQuantity, handleRemove } from "../../Reducer/actionCreator";
import { AppContextWithReducer } from "../../Context/AppContextWithReducer";

const SingleCartCard = ({ id, title, price, quantity, total }) => {
  const [state,dispatch]= useContext(AppContextWithReducer)
  return (
    <>
      <div>
        <div>
          <h3>{title}</h3>
        </div>
        <div>
          <p>M.R.P = {price}</p>
          <p>Total Price = {total}</p>
        </div>

        <div>
          <button onClick={()=>handleQuantity(id,price,quantity,"-",dispatch)}>-</button>
          <p>Quantity = {quantity}</p>
          <button onClick={()=>handleQuantity(id,price,quantity,"+",dispatch)}>+</button>
        </div>

        <div>
          <button onClick={()=>handleRemove(id,dispatch)}>Remove</button>
        </div>
      </div>
    </>
  );
};

export default SingleCartCard;
