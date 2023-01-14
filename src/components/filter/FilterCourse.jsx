import React from "react";
import { FaRegFolderOpen } from "react-icons/fa";
// import { useState } from "react";

const FilterCourse = ({ button, filterKategori }) => {
  return (
    <div className="kategori-course">
      <p>Kategori</p>
      <div className="buttons-kategori">
        {button.map((kategori, i) => {
          return (
            <button
              type="button"
              className="button-kategori"
              onClick={() => filterKategori(kategori)}
              // className={kategori == currentPage ? "active" : ""}
            >
              <FaRegFolderOpen
                size={21}
                value={{ color: "icons-button-kategori" }}
              />
              {kategori}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default FilterCourse;
