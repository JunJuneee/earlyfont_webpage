import React from "react";
import { Link } from "react-router-dom";
import "./Portfolio.css";
import AOS from "aos";

function Portfolio(props) {
  AOS.init({ offset: 200, delay: 100, duration: 700 });
  return (
    <div className="portfolio">
      <div className="portfolio_list_container">
        <div className="portfolio_list_white">
          <Link to="/portfolio/라디오고딕" className="portfolio_list_link">
            <img
              className="portfolio_thumnail"
              src="/FontImages/1_1.jpg"
              alt=""
            />
          </Link>
        </div>
        <div className="portfolio_list_white ">
          <Link
            to="/portfolio/화고딕"
            className="portfolio_list_link portfolio_reverse"
          >
            <img
              data-aos="flip-right"
              data-aos-easing="ease-out-cubic"
              className="portfolio_thumnail"
              src="/FontImages/2_1.jpg"
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
              src="/FontImages/3_1.jpg"
              alt=""
            />
          </Link>
        </div>
        <div className="portfolio_list_grey">
          <Link to="/portfolio/짱구고딕" className="portfolio_list_link">
            <img
              data-aos="flip-right"
              data-aos-easing="ease-out-cubic"
              className="portfolio_thumnail"
              src="/FontImages/4_1.jpg"
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
