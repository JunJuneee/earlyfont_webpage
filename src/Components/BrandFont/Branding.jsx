import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./Branding.css";

function Branding(props) {
  const title_ref = useRef();
  const content1 = useRef();

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    if (
      title_ref.current?.offsetTop !== 0 &&
      currentScrollY + 200 > title_ref.current?.offsetTop
    ) {
      content1.current.className = "branding_feature_contents";
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
  return (
    <div className="branding">
      <div className="branding_banner">
        <h1>브랜드 개발사가 만드는 폰트</h1>
        <p>
          타이포브랜딩(Typography Branding)은
          <br /> 브랜드의 고유한 폰트인 ‘전용서체’를 개발하는 과정입니다.
          <br />
          그리고 우리는 당신의 브랜드가 가장 멋있게 빛나는 모습을 아는
          사람들입니다.
          <br />
          브랜드개발사에서 만드는 폰트는 다릅니다.
        </p>
      </div>
      <div className="branding_feature">
        <div className="branding_feature_title" ref={title_ref}>
          <div className="branding_feature_title_container">
            <h1>
              타이포브랜딩(Typography Branding)은
              <br />
               당신의 브랜드를 구별짓고, 기억시킵니다.
            </h1>
          </div>
        </div>
        <div className="dis_none" ref={content1}>
          <div className="branding_feature_contents_container">
            <svg
              version="1.1"
              id="레이어_1"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="512.467px"
              height="875.073px"
              viewBox="243.767 126.481 512.467 875.073"
              enable-background="new 243.767 126.481 512.467 875.073"
            >
              <line
                className="branding_svg branding_svg_content1"
                fill="none"
                stroke="#1b1b63"
                stroke-width="8"
                stroke-miterlimit="10"
                x1="302.471"
                y1="128.034"
                x2="464.659"
                y2="512.917"
              />

              <line
                className="branding_svg branding_svg_content2"
                fill="none"
                stroke="#1b1b63"
                stroke-width="8"
                stroke-miterlimit="10"
                x1="243.767"
                y1="512.917"
                x2="756.233"
                y2="512.917"
              />
              <line
                className="branding_svg branding_svg_content1"
                fill="none"
                stroke="#1b1b63"
                stroke-width="8"
                stroke-miterlimit="10"
                x1="716.281"
                y1="512.917"
                x2="511.027"
                y2="1000"
              />
            </svg>

            <div className="branding_feature_contents_texts1">
              <h1>구별짓다</h1>
              <p>고유한 이름을 가짐으로써 타인과 구별짓듯이, </p>
              <p>기업의 고유한 브랜드아이덴티티를 폰트에 </p>
              <p>녹여내어 경쟁사와 차별화할 수 있습니다. </p>
              <p>다양한 매체에서 일관된 브랜드커뮤니케이션을 달성합니다.</p>
            </div>
            <div className="branding_feature_contents_texts2">
              <h1>기억시키다</h1>
              <p>마케팅 차원의 폰트 활용/배포는 </p>
              <p>사용자의 긍정적인 경험을 유도하고 </p>
              <p>바이럴로 이어져 기업의 이미지를 기억시킵니다. </p>
              <p>이는 결국 마케팅 비용의 절감으로 이어집니다.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="branding_font">
        <div className="branding_font_texts">
          <h1>의도한 브랜딩 목표를 달성하는 얼리폰트</h1>
          <img src="/Images/branding.png" alt="" />
          <p>
            얼리폰트는 고딕계열의 폰트뿐만 아니라 명조체, 캘리그라피 등 모든
            형태의 폰트디자인 구현이 가능합니다.
          </p>
          <p>
            '이성'이 아니라 '감정'의 결정에 의해 선택받는 마켓에서 최적의
            타이포브랜딩을 위해 의뢰자의 정확한 브랜딩 목표를 실현합니다.
          </p>
        </div>
      </div>
      <div className="branding_price">
        <div className="branding_price_compare">
          <h1>전용서체 개발 서비스 비교</h1>
          <img src="Images/branding_price.jpg" alt="" srcset="" />
        </div>
        <div className="branding_price_texts">
          <h1>더욱 빠르게, 가장 합리적으로</h1>
          <p>그동안 오래 걸리고 부담되었던 한글 폰트 제작.</p>
          <p>
            얼리폰트의 폰트개발기술은 기존의 폰트 제작시간을 5개월에서 단 2주로
            줄이고,
          </p>
          <p>평균제작단가를 최대 80퍼센트까지 낮추는 성과를 나타냅니다.</p>
        </div>
        <div className="branding_link">
          <h1>
            고유한 폰트로써 브랜드파워를 확장하려는 스타트업과 중소기업을 <br />
            얼리폰트는 응원합니다.
          </h1>
          <div className="branding_link_to">
            <Link to="/portfolio">포트폴리오 보기</Link>
            <Link to="/estimate">견적 문의</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Branding;
