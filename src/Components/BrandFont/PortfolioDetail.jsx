import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function PortfolioDetail({ match, history }) {
  const [fontInfo, setFontInfo] = useState("");
  console.log(fontInfo);
  useEffect(() => {
    axios
      .post("/api/loadFontSingleData", { name: match.params.name })
      .then((res) => {
        setFontInfo(res.data.font);
      });
  }, []);

  return (
    <div className="portfolio_detail">
      <img src={fontInfo.detail_image} alt="" />

      {fontInfo.font_file ? (
        <div className="branding_link_to mt-4">
          <Link
            target="_blank"
            to={`/FontImages/${fontInfo.title}.zip`}
            download
          >
            폰트 다운로드
          </Link>
          <Link
            className="hide_botton"
            onClick={() => {
              history.goBack();
            }}
          >
            포트폴리오 보기
          </Link>
        </div>
      ) : (
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
      )}
    </div>
  );
}

export default PortfolioDetail;
