import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Footer.css";
import LicenseModal from "./Modals/LicenseModal";
import PolicyModal from "./Modals/PolicyModal";

function Footer({ match }) {
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [footerText, setFooterText] = useState([]);

  useEffect(() => {
    axios.get("/api/estimates_edit").then((res) => {
      setFooterText(res.data.estimates_lists[6].texts);
    });
  }, []);
  return (
    <div className="footer">
      <div className="footer_container">
        <div className="footer_left">
          <div className="footer_info">
            {footerText.slice(0, -1).map((item) => (
              <p>{item}</p>
            ))}
            <p className="footer_copyright">
              {footerText[footerText.length - 1]}
            </p>
          </div>
        </div>
        <div className="footer_right">
          <div className="footer_license">
            <p onClick={() => setOpen(true)}>&nbsp;라이센스 및 이용약관 / </p>
            <p onClick={() => setOpen2(true)}>&nbsp;개인정보처리방침</p>
            <LicenseModal open={open} setOpen={setOpen} />
            <PolicyModal open={open2} setOpen={setOpen2} />
          </div>
          <div className="footer_kakao_container">
            <img src="/Images/kakao_logo.png" alt="" />
            <div className="footer_right_texts">
              <p>카카오톡 1:1 상담(10AM~18PM)</p>
              <p>플러스친구 ID @EARLYFONT</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
