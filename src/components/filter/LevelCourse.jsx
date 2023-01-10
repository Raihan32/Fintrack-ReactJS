import React from "react";

const LevelCourse = () => {
  return (
    <div className="lv-radio-course">
      <p>Tingkatan</p>
      {/* <label class="form-control">
        {button.map((level, i) => {
          return (
            <button type="button" name="radio" onClick={() => filter(level)}>
              {level}
            </button>
          );
        })}
      </label> */}
      {/* <label class="form-control">
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
      <label class="lv-form-control">
        <input type="radio" name="radio" />
        Intermediate
      </label>
    </div>
  );
};

export default LevelCourse;
