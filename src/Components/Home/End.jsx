import React, { useEffect } from "react";
import { useRef } from "react";
import "./End.css";
function End({ setStarEndHeight }) {
  const ref = useRef();
  useEffect(() => {
    setStarEndHeight(ref);
  });

  return (
    <div className="end">
      <h1 ref={ref}>
        얼리폰트는 <br /> 가장 아름다운 폰트를 <br />
        가장 빠르고
        <br /> 합리적인 비용으로 제공합니다.
      </h1>
      <div className="end_pic_container">
        <img src="Images/elephant.png" alt="" />
      </div>
    </div>
  );
}

export default End;
