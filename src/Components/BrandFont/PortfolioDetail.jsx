import React from "react";

function PortfolioDetail({ match }) {
  console.log(match.params.name);
  return (
    <div className="portfolio_detail">
      <img src="/FontImages/ladio2.jpg" alt="" />
    </div>
  );
}

export default PortfolioDetail;
