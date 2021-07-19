import React from "react";
import { Link } from "react-router-dom";
import "./Portfolio.css";
import AOS from "aos";

function Portfolio(props) {
  AOS.init({ offset: 500, delay: 100, duration: 700 });
  return (
    <div className="portfolio">
      <div className="portfolio_detail" data-aos="flip-left">
        <div className="portfolio_detail_texts ">
          <h2>ㅇㅇ기업</h2>
          <h2>EF옴니고딕</h2>
        </div>
        <img
          src="https://cdn.pixabay.com/photo/2017/09/06/15/19/blackboard-2721887_960_720.jpg"
          alt=""
        />
      </div>
      <div className="portfolio_detail" data-aos="flip-right">
        <img
          src="https://cdn.pixabay.com/photo/2018/07/08/08/45/abc-3523453_960_720.jpg"
          alt=""
        />
        <div className="portfolio_detail_texts ">
          <h2>ㅇㅇ기업</h2>
          <h2>EF꽃길체</h2>
        </div>
      </div>
      <div className="portfolio_detail" data-aos="flip-left">
        <div className="portfolio_detail_texts ">
          <h2>ㅇㅇ기업</h2>
          <h2>EF옴니고딕</h2>
        </div>
        <img
          src="https://cdn.pixabay.com/photo/2017/09/06/15/19/blackboard-2721887_960_720.jpg"
          alt=""
        />
      </div>
      <div className="portfolio_detail" data-aos="flip-right">
        <img
          src="https://cdn.pixabay.com/photo/2018/07/08/08/45/abc-3523453_960_720.jpg"
          alt=""
        />
        <div className="portfolio_detail_texts ">
          <h2>ㅇㅇ기업</h2>
          <h2>EF꽃길체</h2>
        </div>
      </div>
      <p className="introFont_more">더보기</p>
      <div className="introFont_moveLink">
        <Link to="/intro_font">전용서체 소개</Link>
        <Link to="/estimate">견적서다운로드</Link>
      </div>
    </div>
  );
}

export default Portfolio;
