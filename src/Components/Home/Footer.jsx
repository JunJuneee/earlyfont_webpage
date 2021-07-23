import React from "react";
import "./Footer.css";

function Footer(props) {
  return (
    <div className="footer">
      <div className="footer_container">
        <div className="footer_left">
          <div className="footer_license">
            <p>라이센스 / 이용약관 / 개인정보처리방침</p>
          </div>
          <div className="footer_info">
            <p>CONTACT</p>
            <p>
              영업시간 : 10:00 ~ 18:00 대표전화:032-287-7979 팩스 : 032-232-4666
            </p>
            <p>
              사업자등록번호 : 121-25-22454 통신판매업신고번호 :
              2018-인천남동구-0077
            </p>
            <p>주소 : 인천광역시 남동구 논고개로 101 아름다운타워 9층 905호</p>
            <p>이메일 : SINGSONG44@EUXKOREA.COM</p>
          </div>
        </div>
        <div className="footer_right">
          <img
            src="http://www.d-plant.com/images/2368144B56FFF8620A.png"
            alt=""
          />
          <div className="footer_right_texts">
            <p>카카오톡 1:1 상담(10AM~18PM)</p>
            <p>플러스친구 ID @EARLYFONT</p>
          </div>
        </div>
      </div>
      <p className="text_center">COPYRIGHT @ EUX CORP ALL RIGHT RESERVED</p>
    </div>
  );
}

export default Footer;