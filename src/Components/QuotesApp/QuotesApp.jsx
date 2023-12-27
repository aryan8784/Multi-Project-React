import React, { useState, useEffect } from "react";
import AllQuotes from "./AllQuotes";
import Pagination from "./Pagination";
import axios from "axios";

// This Is HUB Component Hub Component jo main component hu or state control kr rha hu

const QuotesApp = () => {
  const [quotes, setQuotes] = useState(null);
  const [skip, setSkip] = useState(0);
  const [loading, setLoading] = useState(true);
  const [limit, setLimit] = useState(5);
  // This is UseEffect Hook
  useEffect(() => {
    axios
      .get(`https://dummyjson.com/quotes?limit=5&skip=${skip}`)
      .then((response) => {
        // console.log(response.data.quotes);
        setLoading(false);
        setQuotes(response.data.quotes);
      });
  }, [skip]);

  // uplifting function ye jo

  const handlePageChange = (value) => {
    setSkip(value);
  };

  // if(loading){
  // return  <div style={{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh"}}>
  //   <img style={{borderRadius:"50%"}} src="https://i.gifer.com/origin/34/3459e0e117b5d35a51aef0cf1e443831_w200.webp" alt="" />
  // </div>
  // }

  return (
    <>
      <div>
        {loading ? (
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
        ) : (
          <AllQuotes quotes={quotes} />
        )}

        <Pagination limit={limit} skip={skip} handlePageChange={handlePageChange} />
      </div>
    </>
  );
};

export default QuotesApp;
