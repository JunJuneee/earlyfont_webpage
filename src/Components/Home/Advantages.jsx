import React, { useEffect, useState, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Advantages.css";

function Advantages(props) {
  const fast_div = useRef();
  const pretty_div = useRef();
  const scrollHeight = window.outerHeight * 2.2;
  const [left, setLeft] = useState(10);
  const [picNum, setPicNum] = useState(1);
  const [day, setDay] = useState(1);
  const [mobile, setMobile] = useState(false);
  const projectName = [
    "폰트디자인 기획",
    "폰트디자인 기획",
    "시안 제안 디벨롭",
    "시안 제안 디벨롭",
    "최종디자인 확정",
    "확장 자소 디자인",
    "확장 자소 디자인",
    "폰트 기획 조합 디벨롭",
    `폰트 기획 조합 디벨롭`,
    "폰트납품",
  ];
  AOS.init({ offset: 100, delay: 0, duration: 500 });
  const handleScroll = () => {
    let num = parseInt(
      (fast_div.current?.offsetTop /
        (scrollHeight -
          fast_div.current?.clientHeight -
          window.outerHeight * (mobile ? 0.2 : 0.35) -
          150)) *
        100
    );

    if (num > 0 && num < 100) {
      setDay(parseInt(num / 10) + 1);
      setPicNum(parseInt(num / 10) + 1);
      setLeft(num * 0.8 + 4);
      console.log(num);
    }
  };

  useEffect(() => {
    window.innerWidth <= 960 && setMobile(true);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="advantages">
      <div className="advantage_container">
        <div
          ref={fast_div}
          className="advantage_container_fast bubble_right bubble_left"
        >
          <h1>빠르다</h1>
          <p>디자인 자유도를 극대화하는 독자적인 한글 조합 기술로</p>
          <p>경쟁사 대비 10배 빠르게 만듭니다.</p>
          <img
            src={`/Images/adv_fast_${picNum}.png`}
            className="advantage_fast_img"
            alt=""
            srcset=""
          />
          <div className="advantage_texts">
            <div className="advantage_text_fast" style={{ left: `${left}%` }}>
              <p className="advantage_text_fast_time">{day}일</p>
              <p className="advantage_text_fast_explain">
                {`${projectName[day - 1]}`}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        ref={pretty_div}
        className="advantage_container advantage_container_pretty"
      >
        <div className="advantage_container_texts">
          <h1>예쁘다</h1>
          <p>좋은 브랜드를 연구하던 글자덕후들이</p>
          <p>정교한 제작과정을 거쳐 아름다운 글자를 만듭니다.</p>
        </div>

        <div className="advantage_container_pretty_img">
          <img
            src="/Images/adv_pretty.png"
            width="500px"
            height="3000px"
            alt=""
            srcset=""
          />
          <div className="point_line_container">
            <svg
              className="point_line pointer_1"
              data-name="레이어 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 489.96 156"
            >
              <circle class="adv_circle" cx="45.28" cy="107.64" r="45" />
              <polyline
                fill="none"
                stroke="#1b1b63"
                stroke-width="4"
                stroke-miterlimit="10"
                points="75.01 95.1 127.13 52.17 350.21 52.17"
              />
            </svg>
            <div className="point_line_texts point_line1_text">
              <h3>기획에 따른 디테일한 선의 처리</h3>
              <p>
                서체 특유의 개성을 표현하면서 <br /> 가독성을 동시에 확보
              </p>
            </div>
          </div>
          <div className="point_line_container">
            <svg
              className="point_line pointer_2"
              data-name="레이어 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 489.96 156"
            >
              <circle class="adv_circle" cx="270.28" cy="87.64" r="45" />
              <polyline
                fill="none"
                stroke="#1b1b63"
                stroke-width="4"
                stroke-miterlimit="10"
                class="cls-2"
                points="253.11 50.56  201.13 10.84  0 10.84"
              />
            </svg>
            <div className="point_line_texts point_line2_text">
              <h3>최적의 브랜드아이덴티티 표현</h3>
              <p>
                브랜드가 가장 멋진 모습으로 그려지는
                <br /> 신뢰감있는 타이포 디자인
              </p>
            </div>
          </div>
          <div className="point_line_container">
            <svg
              className="point_line pointer_3"
              data-name="레이어 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 489.96 156"
            >
              <circle class="adv_circle" cx="45" cy="45" r="45" />
              <line
                fill="none"
                stroke="#1b1b63"
                stroke-width="4"
                stroke-miterlimit="10"
                class="cls-2"
                x1=" 90.95"
                y1="45.12"
                x2="700"
                y2="45.12"
              />
            </svg>
            <div className="point_line_texts point_line3_text">
              <h3>그리드시스템 기반의 설계</h3>
              <p>
                최적의 웨이트와 균형적 배치를 통해
                <br /> 통일감과 명료함을 주는 디자인
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="advantage_container advantage_container_cheap">
        <div className="advantage_container_texts">
          <h1>저렴하다</h1>
          <p>
            한글의 과학적 원리를 응용, 자동화를 통해 생산성을 최대화하였습니다.
          </p>
          <p>특허와 정부지원으로 완성한 혁신은</p>
          <p>더욱 합리적인 가격으로 폰트를 제공할 수 있게 되었습니다.</p>
        </div>
        <div className="advantege_cheap_img">
          <img
            data-aos="fade-right"
            src={`/Images/${mobile ? "adv_cheap_m_1.png" : "adv_cheap_1.png"}`}
            alt=""
          />
          <img
            data-aos="fade-left"
            src={`/Images/${mobile ? "adv_cheap_m_2.png" : "adv_cheap_2.png"}`}
            alt=""
          />
          <img src="/Images/adv_cheap_3.png" alt="" srcset="" />
        </div>
      </div>
    </div>
  );
}

export default Advantages;
