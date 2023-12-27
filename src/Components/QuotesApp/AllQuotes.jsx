import React from "react";
import SingleQuotes from "./SingleQuotes";

const AllQuotes = ({ quotes }) => {
  return (
    <>
      <div>
        {quotes?.map((quote) => (
          <SingleQuotes {...quote} key={quote.id} />
        ))}
      </div>
    </>
  );
};

export default AllQuotes;
