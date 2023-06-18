import React from "react";

const Pagination = ({ postsPerPage, totalPosts, currentPage, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  const handlePreviousClick = () => {
    if (currentPage > 1) {
      paginate(currentPage - 1);
    }
  };

  const handleNextClick = () => {
    if (currentPage < pageNumbers.length) {
      paginate(currentPage + 1);
    }
  };

  return (
    <div className="btn-group">
      <button className="btn" onClick={handlePreviousClick}>
        {"«"}
      </button>
      <button className="btn">{`Page ${currentPage}`}</button>
      <button className="btn" onClick={handleNextClick}>
        {"»"}
      </button>
    </div>
  );
};

export default Pagination;
