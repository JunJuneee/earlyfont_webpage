import React from "react";

function PortfolioDetail({ match }) {
  let image_dict = { 라디오고딕: 1, 화고딕: 2, 혀니고딕: 3, 짱구고딕: 4 };
  let pic_num = image_dict[match.params.name];

  return (
    <div className="portfolio_detail">
      <img src={`/FontImages/${pic_num}_2.jpg`} alt="" />
    </div>
  );
}

export default PortfolioDetail;
