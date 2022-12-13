// import React from "react";
import React, { useState } from "react";

const BoxForm = (props) => {
  const { boxDetails, setBoxDetails } = props;
  const { boxes, setBoxes } = props;

  const onChange = (e) => {
    setBoxDetails({
      ...boxDetails,
      [e.target.name]: e.target.value,
    });
  };

  const createBox = (e) => {
    e.preventDefault();
    setBoxes((boxes) => [
      ...boxes,
      { color: boxDetails.color, size: boxDetails.size },
    ]);
    // console.log(boxes)
  };

  return (
    <>
      <form onSubmit={createBox}>
        <div>
          <label>Color</label>
          <input onChange={onChange} type="text" name="color" />
          <label>Size</label>
          <input onChange={onChange} type="text" name="size" />
          <button value="color">Add</button>
        </div>
      </form>
    </>
  );
};

export default BoxForm;
