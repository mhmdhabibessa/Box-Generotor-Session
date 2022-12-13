import React, { useEffect, useState } from "react";
import BoxGenerator from "./BoxGenerator";
import DisplayBox from "./DisplayBox";
import BoxForm from "./BoxForm";
export default () => {
  const [boxes, setBoxes] = useState([]);
  const [boxDetails, setBoxDetails] = useState({
    color: "",
    size: "",
  });
  console.log(boxes);

  return (
    <div>
      {/* box generator example on one components */}
      <BoxGenerator />

      {/* box generator example on lifting */}
      <BoxForm
        boxDetails={boxDetails}
        setBoxDetails={setBoxDetails}
        boxes={boxes}
        setBoxes={setBoxes}
      />
      {boxes.map((box) => (
        <DisplayBox color={box.color} size={box.size} />
      ))}
    </div>
  );
};
