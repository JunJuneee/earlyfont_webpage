import React, { useState, useEffect } from "react";
import Banner from "./Home/Banner";
import Content from "./Home/Content";
import Feature from "./Home/Feature";
import Advantages from "./Home/Advantages";
import End from "./Home/End";

function Home() {
  const [starEndHeight, setStarEndHeight] = useState(0);

  useEffect(() => {
    // 사진 프리로드
    const img = new Image();
    for (let i = 1; i < 11; i++) {
      img.src = `/Images/adv_fast_${i}.png`;
    }
  }, []);
  return (
    <>
      <Banner />
      <Content starEndHeight={starEndHeight} />
      <Feature />
      <Advantages />
      <End setStarEndHeight={setStarEndHeight} />
    </>
  );
}

export default Home;
