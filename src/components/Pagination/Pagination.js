import React from "react";
import "./Pagination.css";
import ReactPaginate from "react-paginate";

const Pagination = ({ pageNumber, setPageNumber, info }) => {
  //   let next = () => {
  //     setPageNumber((x) => x + 1);
  //   };
  //   let prev = () => {
  //     if (pageNumber === 1) return;
  //     setPageNumber((x) => x - 1);
  //   };

  return (
    // <div className="container">
    //   <button onClick={prev}> Previous </button>
    //   <button onClick={next}> Next </button>
    // </div>

    <div>
        <ReactPaginate
      nextLabel="Next"
      previousLabel="Prev"
      onPageChange={(data) => {
        setPageNumber(data.selected + 1);
      }}
      pageCount={info?.pages}
    />
    </div>
    
  );
};

export default Pagination;
