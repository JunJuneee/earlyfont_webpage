import React, { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";
import "./Advantages.css";

function Advantages(props) {
  const fast_div = useRef();
  const pretty_div = useRef();
  const scrollHeight = window.outerHeight * 2;
  const [left, setLeft] = useState(-27);
  const [picNum, setPicNum] = useState(1);
  const [day, setDay] = useState(1);
  const projectName = [
    "폰트디자인 기획",
    "폰트디자인 기획",
    "시안 제안/디벨롭",
    "시안 제안/디벨롭",
    "최종디자인 확정",
    "확장 자소 디자인",
    "확장 자소 디자인",
    "폰트 기획조합/디벨롭",
    "폰트 기획조합/디벨롭",
    "폰트납품",
  ];

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    let num = parseInt(
      (1 -
        (pretty_div.current.offsetTop -
          fast_div.current.offsetHeight -
          fast_div.current.offsetTop) /
          (scrollHeight / 2 + 50)) *
        100
    );
    if (num > 0 && num < 100) {
      setDay(parseInt(num / 10) + 1);
      setPicNum(parseInt(num / 10) + 1);
      setLeft(((fast_div.current.clientWidth + 50) * num) / 100 - 80);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
  return (
    <div className="advantages">
      <div ref={fast_div} className=" advantage_container_fast">
        <div className="advantage_container">
          <h1>빠르다</h1>
          <p>디자인 자유도를 극대화하는 독자적인 한글 조합 기술로</p>
          <p>경쟁사 대비 10배 빠르게 </p>
          <img
            src={`/Images/adv_fast_${picNum}.png`}
            width="400px"
            height="400px"
            className="advantage_fast_img"
            alt=""
            srcset=""
          />
          <div className="advantage_texts">
            <div className="advantage_text_fast" style={{ left: `${left}px` }}>
              <p className="advantage_text_fast_time">{day}일</p>
              <p className="advantage_text_fast_explain">
                {projectName[day - 1]}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        ref={pretty_div}
        className="advantage_container advantage_container_pretty"
      >
        <h1>예쁘다</h1>
        <p>좋은 브랜드를 연구하던 글자덕후들이</p>
        <p>정교한 제작과정을 거쳐 아름다운 글자를 만듭니다.</p>
      </div>
      <div className="advantage_container">
        <h1>저렴하다</h1>
        <p>특허와 정부지원으로 완성한 혁신은</p>
        <p>더욱 합리적인 가격으로 폰트를 제공할 수 있게 되었습니다.</p>
      </div>
    </div>
  );
}

export default Advantages;
