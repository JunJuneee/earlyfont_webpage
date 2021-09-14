import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function PortfolioDetail({ match, history }) {
  const [url, setUrl] = useState("");
  useEffect(() => {
    axios
      .post("/api/loadFontSingleData", { name: match.params.name })
      .then((res) => setUrl(res.data.url));
  }, []);

  return (
    <div className="portfolio_detail">
      <img src={url} alt="" />
      <div className="branding_link_to mt-4">
        <Link to="/branding">타이포브랜딩 소개</Link>
        <Link
          className="hide_botton"
          onClick={() => {
            history.goBack();
          }}
        >
          포트폴리오 보기
        </Link>
      </div>
    </div>
  );
}

export default PortfolioDetail;
