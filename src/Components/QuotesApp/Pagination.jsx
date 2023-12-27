import React from "react";

const Pagination = ({ skip, handlePageChange,limit }) => {
  // yaha humy skip value ko calculate krna pary ga taqy hum us se page ka exact number find kr sakyy
  // skip agr 0 hu ga tw us waqt mera page number 1 hu ga
  // isi trah agr mera skip 5 hu ga tw page number 2 hu ga so on

  const page = skip / limit + 1;

  return (
    <>
      <div style={{display:"flex",justifyContent:"center",paddingBottom:"40px"}}>
        <button
        style={{padding:"10px"}}
          disabled={page === 1}
          onClick={() => handlePageChange(skip - limit)}
        >
          Previous
        </button>
        <button>{page}</button>
        <button onClick={() => handlePageChange(skip + limit)}>Next</button>
      </div>
    </>
  );
};

export default Pagination;
