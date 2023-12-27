import React from "react";
import style from "./styles/Navbar.module.css"
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <div>
        <div className={style.navbar}>
        <div>
        <h1>
          <Link to="/" style={{color:"teal"}}>Navbar</Link>
        </h1>
        </div>
        <div>
          <ul>
            <li>
            <Link to="/counter" style={{color:"teal"}}>Counter</Link>
            </li>
            <li>
              <Link to="/todo" style={{color:"teal"}}>Todo</Link>
            </li>
            <li>
            <Link to="/quotes" style={{color:"teal"}}>Quotes</Link>
            </li>
            <li>
            <Link to="/products" style={{color:"teal"}}>Products</Link>
            </li>
            <li>
              <Link to="/payment" style={{color:"teal"}}>Payment</Link>
            </li>
            <li>
              <Link to="/fire" style={{color:"teal"}}>Fire</Link>
            </li>
            <li>
              <Link to="/cart" style={{color:"teal"}}>Cart</Link>
            </li>
            <li>
              <Link to="/login" style={{color:"teal"}}>Login</Link>
            </li>
          </ul>
        </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
