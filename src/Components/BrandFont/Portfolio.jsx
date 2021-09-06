import React from "react";
import { Link } from "react-router-dom";
import "./Portfolio.css";
import AOS from "aos";

function Portfolio(props) {
  AOS.init({ offset: 200, delay: 100, duration: 700 });
  console.log();
  return (
    <div className="portfolio">
      <div className="portfolio_title">
        <h2>기업용 전용서체</h2>
        <p>폰트에 브랜드 아이덴티티를 나타내다</p>
      </div>
      <div className="portfolio_list_container">
        <div className="portfolio_list_white">
          <Link to="/portfolio/라디오고딕" className="portfolio_list_link">
            <img
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              className="portfolio_thumnail"
              src="/FontImages/1_1.png"
              alt=""
            />
            <div className="portfolio_list_content_right">
              <h2>라디오고딕</h2>
              <p>
                라디오서체는 조경디자인을 모티브로
                <br />
                라운드와 직선의 조합을 조화롭게 담아낸 서체입니다.
              </p>
            </div>
          </Link>
        </div>
        <div className="portfolio_list_grey ">
          <Link
            to="/portfolio/화고딕"
            className="portfolio_list_link portfolio_reverse"
          >
            <div className="portfolio_list_content_left">
              <h2>화고딕</h2>
              <p>
                화고딕은 소프트웨어 개발 기술력을 지닌
                <br />
                HWASOFT의 브랜드이미지를 표현한 서체입니다.
              </p>
            </div>
            <img
              data-aos="flip-right"
              data-aos-easing="ease-out-cubic"
              className="portfolio_thumnail"
              src="/FontImages/2_1.png"
              alt=""
            />
          </Link>
        </div>
        <div className="portfolio_list_white">
          <Link to="/portfolio/혀니고딕" className="portfolio_list_link">
            <img
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              className="portfolio_thumnail"
              src="/FontImages/3_1.png"
              alt=""
            />
            <div className="portfolio_list_content_right">
              <h2>혀니고딕</h2>
              <p>혀니고딕은 직각의 요소를 안정적인 비율로 표현한 서체입니다.</p>
            </div>
          </Link>
        </div>
        <div className="portfolio_list_grey">
          <Link to="/portfolio/화고딕" className="portfolio_list_link">
            <div className="portfolio_list_content_left">
              <h2>화고딕</h2>
              <p>
                화고딕은 소프트웨어 개발 기술력을 지닌
                <br />
                HWASOFT의 브랜드이미지를 표현한 서체입니다.
              </p>
            </div>
            <img
              data-aos="flip-right"
              data-aos-easing="ease-out-cubic"
              className="portfolio_thumnail"
              src="/FontImages/2_1.png"
              alt=""
            />
          </Link>
        </div>
      </div>
      <p className="introFont_more">더보기</p>
      <div className="branding_link_to mt-4">
        <Link to="/branding">타이포브랜딩 소개</Link>
        <Link to="/estimate">견적문의</Link>
      </div>
    </div>
  );
}

export default Portfolio;
