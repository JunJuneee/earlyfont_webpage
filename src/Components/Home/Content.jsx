import React, { useRef, useEffect } from "react";
import { useState } from "react";
import "./Content.css";

function Content(props) {
  const star = useRef();
  const boxScroll = useRef();
  const [styles, setStyles] = useState({});
  let scrollY = 0;
  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (boxScroll.current.clientHeight < currentScrollY) {
      scrollY = currentScrollY - boxScroll.current.clientHeight + 100;
      setStyles({
        top: `${scrollY}px`,
      });
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
  return (
    <div className="content" ref={boxScroll}>
      {/* <img
        src="Images/banner_bg_bottom.png
      "
        alt=""
      /> */}
      <img
        className="content_star"
        style={styles}
        ref={star}
        src="Images/rotating_star.png"
        alt="star"
      />
      <div className="content_title">
        <p>
          한글 <br /> 11,172자
        </p>
        <p>
          영어 <br /> 52자
        </p>
      </div>
      <div className="content_text">
        <p>대소문자 52자인 영어와 달리</p>
        <p>
          11,172자로 표현되는 한글 폰트는 최소 5개월의 제작기간과 수천만원의
          개발단가 때문에 쉽게 접근하기 어려웠습니다.
        </p>
        <p>
          더욱 많은 개인과 중소기업이 자신만의 고유한 폰트로 브랜드를 강화할 수
          있어야 합니다.
        </p>
      </div>
      {styles?.top && (
        <div className="content_bubbles">
          <div className="content_bubble"></div>
          <div className="content_bubble2"></div>
        </div>
      )}
    </div>
  );
}

export default Content;
