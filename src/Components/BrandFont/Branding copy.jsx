.branding {
  width: 100%;
}
.branding_banner {
  background: #1b1b63;
  color: white;
  margin: auto;
  text-align: center;
  padding: 7rem 0;
  margin-top: -80px;
}
.branding_banner > h1 {
  text-decoration: underline;
  text-underline-position: under;
  font-family: "S-CoreDream-6Bold";
  margin-bottom: 5rem;
}
.branding_feature {
  width: 80%;
  margin: auto;
  padding: 10rem 0;
}
.branding_feature_title {
  text-align: center;
  position: relative;
}

.branding_feature_title_container > h1 {
  font-family: "S-CoreDream-6Bold";
  position: absolute;
  top: 25%;
  left: 12%;
}
.branding_feature_title_container {
  width: 100%;
  max-width: 750px;
  margin: auto;
  position: relative;
}
/* .branding_feature > svg {
  height: 100vh;
  width: 100%;
} */
.branding_feature_svg {
  fill: none;
  stroke: #181863;
  stroke-width: 10;
  stroke-miterlimit: 10;
  animation: dash 3s linear 0s;
  stroke-dasharray: 1000;
  stroke-dashoffset: 1000;
}

.branding_svg {
  fill: none;
  stroke: #181863;
  stroke-miterlimit: 10;
  stroke-width: 10px;
  animation: dash 1s linear;
  stroke-dasharray: 0;
  stroke-dashoffset: 0;
}

@keyframes dash {
  0% {
    stroke-dashoffset: 1000;

    stroke-dasharray: 1500;
  }

  100% {
    stroke-dashoffset: 0;

    stroke-dasharray: 2000;
  }
}

import React from "react";
import { Link } from "react-router-dom";
import "./Branding.css";
function Branding(props) {
  return (
    <div className="branding">
      <div className="branding_banner">
        <h1>브랜드 개발사가 만드는 폰트</h1>
        <p>
          브랜드개발사에서 만드는 폰트는 다릅니다. <br /> 우리는 당신의 브랜드가
          가장 멋있게 빛나는 모습을 아는 사람들입니다.
        </p>
      </div>
      <div className="branding_feature">
        <div className="branding_feature_title">
          <div className="branding_feature_title_container">
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 761.93 1486.79"
            >
              <rect
                class="branding_svg"
                x="8.05"
                y="5.01"
                width="745.84"
                height="185.35"
              />
              <line
                class="branding_svg"
                x1="87.28"
                y1="190.36"
                x2="328.42"
                y2="762.6"
              />
              <line
                class="branding_svg"
                x1="702.53"
                y1="762.6"
                x2="397.36"
                y2="1486.79"
              />
              <line class="branding_svg" y1="762.6" x2="761.93" y2="762.6" />
            </svg>
            <h1>
              타이포브랜딩(Typography Branding)은
              <br />
               당신의 브랜드를 구별짓고, 기억시킵니다.
            </h1>
          </div>
        </div>
        {/* <div className="branding_feature_contents">
          <div className="branding_feature_contents_container">
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 761.9 500"
            >
              <line
                className="branding_svg"
                x1="0"
                y1="0"
                x2="241.14"
                y2="572.24"
              />
            </svg>
          </div>
        </div> */}
        {/* 
          <line
            className="branding_svg"
            x1="702.53"
            y1="762.6"
            x2="397.36"
            y2="1486.79"
          />
          <line className="branding_svg" y1="762.6" x2="761.93" y2="762.6" /> */}
      </div>
    </div>
  );
}

export default Branding;
