import React from "react";
import "./Intro.css";
import "aos/dist/aos.css";
import AOS from "aos";
import { useSelector } from "react-redux";
import user from "../Module/user";

function Intro(props) {
  const users = useSelector(user);
  console.log(users);
  AOS.init();
  return (
    <div className="intro">
      <div className="intro_content">
        <img
          src="https://cdn.pixabay.com/photo/2021/07/02/06/49/dog-6381087_960_720.jpg"
          alt=""
        />
        <div className="intro_content_texts">
          <h2>얼리폰트는 꿈꿉니다.</h2>
          <p>
            대소문자 52자인 영어와 달리 11,172자로 표현되는 한글 폰트는 최소
            5개월의 제작기간과 수천만원의 개발단가 때문에 쉽게 접근하기
            어려웠습니다. <br /> 더욱 많은 개인과 중소기업이 자신만의 고유한
            폰트로 브랜드를 강화할 수 있어야 합니다.
          </p>
        </div>
      </div>
      <div className="intro_content">
        <img
          src="https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313_960_720.jpg"
          alt=""
        />
        <div className="intro_content_texts">
          <h2>제작효율을 극대화한 폰트 제작 서비스</h2>
          <p>
            얼리폰트는 '기획조합방식'이라는 혁신적이고 독자적인 폰트제작기술을
            완성하였습니다.
            <br /> 기존의 조합형폰트에서 벗어나 기획된 글자디자인을 훼손없이
            일괄적으로 조정/조합하는 기술입니다.
            <br /> 우리의 기술은 이미 외부에서 인정받아 정부지원과 자체
            특허기술이 적용되었습니다.
          </p>
        </div>
      </div>
      <div
        className="intro_detail"
        data-aos="fade-up-right"
        data-aos-offset="500"
        data-aos-delay="100"
        data-aos-duration="1000"
      >
        <div className="intro_detail_texts">
          <h2>빠르다</h2>
          <p>
            디자인 자유도를 극대화하는 독자적인 한글 조합 기술로 경쟁사 대비
            10배 빠르게 폰트를 개발합니다.
          </p>
        </div>
        <img
          src="https://cdn.pixabay.com/photo/2017/09/06/15/19/blackboard-2721887_960_720.jpg"
          alt=""
        />
      </div>
      <div
        className="intro_detail"
        data-aos="fade-up-left"
        data-aos-offset="500"
        data-aos-delay="100"
        data-aos-duration="1000"
      >
        <img
          src="https://cdn.pixabay.com/photo/2018/07/08/08/45/abc-3523453_960_720.jpg"
          alt=""
        />
        <div className="intro_detail_texts">
          <h2>예쁘다</h2>
          <p>
            좋은 브랜드를 연구하던 글자덕후들이 정교한 제작과정을 거쳐 아름다운
            글자를 만듭니다.
          </p>
        </div>
      </div>
      <div
        className="intro_detail"
        data-aos="fade-up-right"
        data-aos-offset="500"
        data-aos-delay="0"
        data-aos-duration="1000"
      >
        <div className="intro_detail_texts">
          <h2>저렴하다</h2>
          <p>
            특허와 정부지원으로 완성한 혁신은 더욱 합리적인 가격으로 폰트를
            제공할 수 있게 되었습니다.
          </p>
        </div>
        <img
          src="https://cdn.pixabay.com/photo/2017/10/03/00/00/dictionary-2810845_960_720.jpg"
          alt=""
        />
      </div>
      <p className="intro_bottom_text">
        얼리폰트는 가장 아름다운 폰트를 가장 빠르고 합리적인 비용으로
        제공합니다. 
      </p>
    </div>
  );
}

export default Intro;
