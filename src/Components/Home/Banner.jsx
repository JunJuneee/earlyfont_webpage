import React, { useRef, useState, useEffect } from "react";
import Typewriter from "typewriter-effect";

import "./Banner.css";

function Banner(props) {
  const star = useRef();
  const [styles, setStyles] = useState();
  const handleScroll = () => {
    setStyles({
      opacity: "0",
      transform: "translate(-70vh,80vh) scale(2,2) ",
      transition: "opacity 2s ease-in-out, transform 2s ease-in-out ",
    });
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="banner">
      <Typewriter
        options={{ autoStart: true }}
        onInit={(typewriter) => {
          typewriter
            .typeString("얼리폰트는")
            .pauseFor(500)
            .typeString("<br/>브랜드를 강화하는")
            .pauseFor(500)
            .typeString("<br/>폰트를 만듭니다")
            .pauseFor(500)
            .start();
        }}
      />
      <ul className="banner_words_explain">
        <li>EARLY : 여느때보다 일찍</li>
        <li>FONT : 글꼴이 동일한 활자의 한벌</li>
      </ul>
      <div className="banner_stars glow"></div>
      <div class="twinkling"></div>
      <img className="banner_bg" src="Images/banner_bg.png" alt="" />
      <img
        className="banner_star"
        style={styles}
        ref={star}
        src="Images/star.png"
        alt="star"
      />

      <a class="scroll-link" href="#content">
        <svg
          class="mouse"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 76 130"
          preserveAspectRatio="xMidYMid meet"
        >
          <g>
            <path
              class="st0"
              d="M23.4,64.9C10.5,64.9,0,54.4,0,41.5V23.4C0,10.5,10.5,0,23.4,0s23.4,10.5,23.4,23.4v18.1
		C46.8,54.4,36.3,64.9,23.4,64.9z M23.4,3C12.1,3,3,12.1,3,23.4v18.1c0,11.2,9.1,20.4,20.4,20.4s20.4-9.1,20.4-20.4V23.4
		C43.8,12.1,34.6,3,23.4,3z"
            />
            <circle class="st0" cx="23.4" cy="92.3" r="3.3" />
            <circle class="st1" cx="23.4" cy="112" r="3.3" />
            <circle class="st2" cx="23.4" cy="131.6" r="3.3" />
            <circle class="st3" cx="23.4" cy="151.3" r="3.3" />
            <path
              class="st0 scroll"
              d="M23.4,34.9L23.4,34.9c-1.8,0-3.3-1.5-3.3-3.3V20.7c0-1.8,1.5-3.3,3.3-3.3h0c1.8,0,3.3,1.5,3.3,3.3v10.9
		C26.7,33.4,25.2,34.9,23.4,34.9z"
            />
          </g>
        </svg>
      </a>
    </div>
  );
}

export default Banner;
