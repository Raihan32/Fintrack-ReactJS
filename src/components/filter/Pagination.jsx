import React from "react";

const Pagination = ({
  totalPosts,
  postsPerPage,
  setCurrentPage,
  currentPage,
}) => {
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pages.push(i);
  }

  return (
    <div class="center">
      <div class="pagination">
        {/* <button href="#">Prev</button> */}
        {pages.map((page, index) => {
          return (
            <button
              key={index}
              onClick={() => setCurrentPage(page)}
              className={page == currentPage ? "active" : ""}
            >
              {page}
            </button>
          );
        })}
        {/* <button href="#">Next</button> */}
      </div>
    </div>
  );
};

export default Pagination;
