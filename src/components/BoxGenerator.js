// import React from "react";
import React, { useState } from "react";

const BoxGenerator = (props) => {
  const [box, setBox] = useState("");
  const [allcolor, setAllcolor] = useState([]);
  const createBox = (e) => {
    e.preventDefault();
    setAllcolor([...allcolor, box]);
    // setBox({
    //   colorbox: "",
    // });
  };

  const onsetColor = (e) => {
    setBox({
      ...box,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <form onSubmit={createBox}>
        <h4>The BoxGenerator</h4>
        <label>Color </label>
        <input type="text" onChange={onsetColor} name="colorbox" />
        <input type="submit" value="Add" />
      </form>

      <div style={{ display: "flex" }}>
        {allcolor.map((fillBox) => {
          return (
            <div>
              <div
                style={{
                  backgroundColor: fillBox.colorbox,
                  height: 150,
                  width: 150,
                  margin: "20px",
                  borderRadius: "20px",
                  boxShadow: "5px 10px 8px 10px #888888",
                }}
              >
                {" "}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default BoxGenerator;
