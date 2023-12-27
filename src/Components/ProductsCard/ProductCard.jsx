import React from "react";
import style from "../../styles/ProductCard.module.css"
import {useNavigate} from "react-router-dom"

const ProductCard = ({ id, title, description, price, thumbnail, brand }) => {

const navigate = useNavigate()



  return (
    <>
      <div className={style.main__div} onClick={()=> navigate(`/products/${id}`)}>
        <img src={thumbnail} alt={title} className={style.image}/>   
        <h4>{title}</h4>
        <p>{description}</p>
        <p>Price - {price}</p>
        <p>Brand Name - {brand}</p>
      <div className={style.button__div}>
        <button>Add to Cart</button>
        <button>Buy</button>
      </div>
      </div>
    </>
  );
};

export default ProductCard;
