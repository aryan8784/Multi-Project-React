import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../Components/ProductsCard/ProductCard";
import style from "../styles/Products.module.css";
import Pagination from "../Components/QuotesApp/Pagination";
import { useSearchParams } from "react-router-dom";

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [skip, setSkip] = useState( Number(searchParams.get("skip")) || 0);
  const [limit, setLimit] = useState(Number(searchParams.get("limit")) ||  12);

  useEffect(() => {
    getData();

    setSearchParams({ limit: limit, skip: skip });
  }, [skip,limit]);

  const getData = () => {
    axios
      .get(`https://dummyjson.com/products?skip=${skip}&limit=${limit}`)
      .then((res) => {
        // console.log(res.data.products);
        setData(res.data.products);
        setLoading(false);
      });
  };

  const handlePageChange = (value) => {
    setSkip(value);
  };

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
        <h1
          style={{
            textAlign: "center",
            marginTop: "20px",
            fontSize: "43px",
            color: "teal",
          }}
        >
          Products Page
        </h1>
        <div className={style.product__div}>
          {data.map((element) => (
            <ProductCard key={element.id} {...element} />
          ))}
        </div>
        <Pagination
          limit={limit}
          skip={skip}
          handlePageChange={handlePageChange}
        />
      </div>
    </>
  );
};

export default Products;
