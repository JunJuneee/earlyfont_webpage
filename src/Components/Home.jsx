import React from "react";
import Banner from "./Home/Banner";
import Content from "./Home/Content";
import Feature from "./Home/Feature";
import Advantages from "./Home/Advantages";

function Home(props) {
  return (
    <div>
      <Banner />
      <Content />
      <Feature />
      <Advantages />
    </div>
  );
}

export default Home;
