import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SingleProduct = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    axios.get(`https://dummyjson.com/products/${id}`).then((res) => {
      // console.log(res.data);
      setData(res.data);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <img
            style={{ borderRadius: "50%" }}
            src="https://i.gifer.com/origin/34/3459e0e117b5d35a51aef0cf1e443831_w200.webp"
            alt=""
          />
        </div>
      </div>
    );
  }

  return (
    <>
      <div>
       <div>
       <h1 style={{ textAlign: "center", marginTop: "20px" }}>
          Single Product Page
        </h1>
       </div>

        <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
          <div>
            <img style={{width:"100%",border:"1px solid black", padding:"10px",marginLeft:"20px",marginTop:"15%"}} src={data.thumbnail} alt="" />
          </div>

          <div style={{marginLeft:"10%"}}>
            <h3>{data.title}</h3>
            <br />
            <br />
            <h3>{data.description}</h3>
            <br />
            <br />
            <p>Price - {data.price}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
