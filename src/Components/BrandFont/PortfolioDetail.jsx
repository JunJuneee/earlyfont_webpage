import React from "react";
import { Link } from "react-router-dom";

function PortfolioDetail({ match, history }) {
  let image_dict = { 라디오고딕: 1, 화고딕: 2, 혀니고딕: 3, 짱구고딕: 4 };
  let pic_num = image_dict[match.params.name];

  return (
    <div className="portfolio_detail">
      <img src={`/FontImages/${pic_num}_2.jpg`} alt="" />
      <div className="branding_link_to mt-4">
        <Link to="/branding">타이포브랜딩 소개</Link>
        <Link onClick={() => history.goBack()}>포트폴리오 보기</Link>
      </div>
    </div>
  );
}

export default PortfolioDetail;
