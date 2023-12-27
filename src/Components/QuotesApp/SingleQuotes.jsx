import React from "react";
import style from "../../styles/SingleQuotes.module.css"

const SingleQuotes = ({id,quote,author}) => {
  return (
    <>
      <div className={style.quote__div}>
        <h3>{quote}</h3>
        <p>{author}</p>
      </div>
    </>
  );
};

export default SingleQuotes;
