import React from "react";
// import { useState } from "react";

const LevelCourse = (filterLevel) => {
  return (
    <div className="lv-radio-course">
      <p>Tingkatan</p>
      <label class="lv-form-control">
        <input
          type="radio"
          name="radio"
          // onClick={() => filterLevel("all")}
        />
        Semua Kategori
      </label>
      <label class="lv-form-control">
        <input type="radio" name="radio" onClick={() => filterLevel("basic")} />
        Basic
      </label>
      <label class="lv-form-control">
        <input
          type="radio"
          name="radio"
          // onClick={() => filterLevel("beginner")}
        />
        Beginner
      </label>
      <label class="lv-form-control">
        <input
          type="radio"
          name="radio"
          // onClick={() => filterLevel("intermediate")}
        />
        Intermediate
      </label>
      {/* <label class="form-control">
        {buttonLevel.map((level, i) => {
          return (
            <button
              type="radio"
              name="radio"
              onClick={() => filterLevel(level)}
            >
              {level}
            </button>
          );
        })}
      </label> */}
      {/* <label class="lv-form-control">
        <input type="radio" name="radio" onClick={() => levelfilter("basic")} />
        Basic
      </label>
      <label class="form-control">
        <input
          type="radio"
          name="radio"
          onClick={() => levelfilter("intermediate")}
        />
        Intermediate
      </label> */}
      {/* <label class="buttons-kategori">
        <button
          className="button-kategori"
          type="button"
          onClick={() => filterLevel("basic")}
        >
          Basic
        </button>
      </label> */}
    </div>
  );
};

export default LevelCourse;
