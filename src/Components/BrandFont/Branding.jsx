import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./Branding.css";

function Branding(props) {
  const first_show = useRef();
  const title_ref = useRef();
  const content1 = useRef();
  const content2 = useRef();
  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > first_show.current?.offsetTop) {
      title_ref.current.className = "branding_feature_title";
    }
    if (
      title_ref.current?.offsetTop !== 0 &&
      currentScrollY > title_ref.current?.offsetTop
    ) {
      content1.current.className = "branding_feature_contents";
    }
    if (
      content1.current?.offsetTop !== 0 &&
      currentScrollY > content1.current?.offsetTop
    ) {
      content2.current.className = "branding_feature_contents";
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
        <p ref={first_show}>
          브랜드개발사에서 만드는 폰트는 다릅니다. <br /> 우리는 당신의 브랜드가
          가장 멋있게 빛나는 모습을 아는 사람들입니다.
        </p>
      </div>
      <div className="branding_feature">
        <div className="dis_none" ref={title_ref}>
          <div className="branding_feature_title_container">
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 761.9 205.7"
            >
              <rect
                className="branding_svg branding_svg_title"
                x="8.05"
                y="5.01"
                width="745.84"
                height="195.35"
              />
            </svg>
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
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 761.9 600"
            >
              <line
                className="branding_svg branding_svg_content1"
                x1="0"
                y1="0"
                x2="241.14"
                y2="595.24"
              />
              <line
                className="branding_svg branding_svg_content2"
                y1="595"
                x2="761.93"
                y2="595"
              />
            </svg>
            <div className="branding_feature_contents_texts1">
              <h1>구별짓다</h1>
              <p>고유한 이름을 가짐으로써 타인과 구별짓듯이, </p>
              <p>기업의 고유한 브랜드아이덴티티를 폰트에 </p>
              <p>녹여내어 경쟁사와 차별화할 수 있습니다. </p>
              <p>다양한 매체에서 일관된 브랜드커뮤니케이션을 달성합니다.</p>
            </div>
          </div>
        </div>
        <div className="dis_none " ref={content2}>
          <div className="branding_feature_contents_container branding_feature_contents_position">
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 761.9 600"
            >
              <line
                class="branding_svg branding_svg_content1"
                x1="305.17"
                y2="720.19"
              />
            </svg>
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
          <h1>과학적인 글자</h1>
          <p>완성도 높은 폰트를 만들어서 과학적이다라는 설명!</p>
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
            <Link to="/estimate">견적 다운로드</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Branding;
