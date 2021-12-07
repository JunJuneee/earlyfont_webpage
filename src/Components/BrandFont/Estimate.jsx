import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Estimate.css";
import axios from "axios";

function Estimate(props) {
  const [estimatesList, setEstimatesList] = useState([]);
  useEffect(() => {
    axios.get("/api/estimates_edit").then((res) => {
      setEstimatesList(res.data.estimates_lists);
    });
  }, []);
  return (
    <div className="estimate">
      <div className="estimate_chart">
        <div className="estimate_chart_content">
          <div className="estimate_chart_content_option">
            <h2>베이직</h2>
            <p>{estimatesList[0]?.texts[0]}</p>
          </div>
          <div className="estimate_chart_content_title">
            {estimatesList[0]?.texts?.slice(1).map((item) => (
              <p>{item}</p>
            ))}
          </div>
          <div className="estimate_download">
            <Link target="_blank" to="/Estimates/Earlyfont_basic.pdf" download>
              견적서 다운로드
            </Link>
          </div>
        </div>

        <div className="estimate_chart_content">
          <div className="estimate_chart_content_option">
            <h2>베이직플러스</h2>
            <p>{estimatesList[1]?.texts[0]}</p>
          </div>
          <div className="estimate_chart_content_title">
            {estimatesList[1]?.texts?.slice(1).map((item) => (
              <p>{item}</p>
            ))}
          </div>
          <div className="estimate_download">
            <Link
              target="_blank"
              to="/Estimates/Earlyfont_basicPlus.pdf"
              download
            >
              견적서 다운로드
            </Link>
          </div>
        </div>
        <div className="estimate_chart_content">
          <div className="estimate_chart_content_option">
            <h2>프리미엄</h2>
            <p>{estimatesList[2]?.texts[0]}</p>
          </div>
          <div className="estimate_chart_content_title">
            {estimatesList[2]?.texts?.slice(1).map((item) => (
              <p>{item}</p>
            ))}
          </div>
          <div className="estimate_download">
            <Link
              target="_blank"
              to="/Estimates/Earlyfont_premium.pdf"
              download
            >
              견적서 다운로드
            </Link>
          </div>
        </div>
        <div className="estimate_chart_content">
          <div className="estimate_chart_content_option">
            <h2>프리미엄플러스</h2>
            <p>{estimatesList[3]?.texts[0]}</p>
          </div>
          <div className="estimate_chart_content_title">
            {estimatesList[3]?.texts?.slice(1).map((item) => (
              <p>{item}</p>
            ))}
          </div>
          <div className="estimate_download">
            <Link
              target="_blank"
              to="/Estimates/Earlyfont_premiumPlus.pdf"
              download
            >
              견적서 다운로드
            </Link>
          </div>
        </div>
      </div>
      <div className="estimate_explain">
        <p>합리적인 견적비교를 위해 폰트개발사 최초로 개발비용을 공시합니다.</p>
        <p>
          선착순 주문 및 피드백 속도에 따른 작업 일정 협의 후 폰트개발이
          시작됩니다.
        </p>
        <p>전용서체의 저작권, 사용권 등 모든 권한은 클라이언트에 제공됩니다.</p>
        <p>
          Windows용 TTF(TrueTypeFont), Macintosh OS X용 OTF(OpenTypeFont)로
          납품됩니다.
        </p>
        <p>
          전체글자(11,172자) 개발 / 기존 로고타입 카피 / 용도, 굵기파생 추가 시
          별도 견적과 기간이 추가됩니다.
        </p>
      </div>
      <div className="estimate_contact">
        <h2>CONTACT</h2>
        <p>대표전화 : 032-287-7979 (영업시간 : 10:00 ~ 18:00)</p>
        <p>팩스 : 032-232-4666</p>
        <p>이메일 : SINGSONG44@EUXKOREA.COM</p>
      </div>
      <div className="estimate_services">
        <h2>EUX BRANDING SERVICES</h2>
        <div className="introFont_moveLink">
          <a target="_blank" href="http://www.d-plant.com/">
            <img src="/Images/designplant_logo.png" alt="" />
          </a>
          <a target="_blank" href="https://www.calliplant.com/">
            <img src="/Images/calliplant_logo.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Estimate;
