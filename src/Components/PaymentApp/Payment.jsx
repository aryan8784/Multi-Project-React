import React, { useState } from "react";
import style from "../../styles/Payment.module.css";

const data = {
  name: "",
  address: "",
  cardno: "",
  cvv: "",
  email:""
};

const Payment = () => {
  const [formData, setFormData] = useState(data);

  const handleOnChange = (events) => {
    const { value, name } = events.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    
  };

  return (
    <>
      <div className={style.payment__div}>
        <form action="" className={style.form} onSubmit={handleSubmit}>
          <h1
            style={{
              textAlign: "center",
              marginBottom: "50px",
              fontSize: "53px",
            }}
          >
            Payment App
          </h1>
          <input
            onChange={handleOnChange}
            name="name"
            type="text"
            placeholder="Enter Your Name"
            value={formData.name}
          />
             <input
            onChange={handleOnChange}
            name="email"
            type="text"
            placeholder="Enter Your Email"
            value={formData.email}
          />
          <input
            onChange={handleOnChange}
            name="address"
            type="text"
            placeholder="Enter Your Address"
            value={formData.address}
          />
          <input
            onChange={handleOnChange}
            name="cardno"
            type="text"
            placeholder="Card No"
            value={formData.cardno}
          />
          <input
            onChange={handleOnChange}
            name="cvv"
            type="text"
            placeholder="CVV number"
            value={formData.cvv}
          />
          <input
            style={{
              backgroundColor: "black",
              color: "white",
              cursor: "pointer",
            }}
            type="submit"
          />
        </form>
      </div>
    </>
  );
};

export default Payment;
