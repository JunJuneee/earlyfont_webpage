import React from "react";
import "./Feature.css";

function Feature(props) {
  return (
    <div className="feature">
      <div className="feature_main">
        <img src="feature.gif" alt="" srcset="" />
        <div className="feature_main_text">
          <h3>제작효율을 극대화한 폰트 제작 서비스</h3>
          <p>
            얼리폰트는 '기획조합방식'이라는 혁신적이고 독자적인 폰트제작기술을
            완성하였습니다.{" "}
          </p>
          <p>
            기존의 조합형폰트에서 벗어나 기획된 글자디자인을 훼손없이 일괄적으로
            조정/조합하는 기술입니다.{" "}
          </p>
          <p>
            우리의 기술은 이미 외부에서 인정받아 정부지원과 자체 특허기술이
            적용되었습니다.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Feature;
