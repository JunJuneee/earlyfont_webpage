import React from "react";
import Banner from "./Home/Banner";
import Content from "./Home/Content";
import Feature from "./Home/Feature";
import Advantages from "./Home/Advantages";
import End from "./Home/End";
import { useState } from "react";

function Home() {
  const [starEndHeight, setStarEndHeight] = useState(0);
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
