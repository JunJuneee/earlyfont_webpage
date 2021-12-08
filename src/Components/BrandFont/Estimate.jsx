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
        {estimatesList[4]?.texts.map((item) => (
          <p>{item}</p>
        ))}
      </div>
      <div className="estimate_contact">
        <h2>CONTACT</h2>
        {estimatesList[5]?.texts.map((item) => (
          <p>{item}</p>
        ))}
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
