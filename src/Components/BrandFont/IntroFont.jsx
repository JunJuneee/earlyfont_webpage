import React from "react";
import AOS from "aos";
import { Link } from "react-router-dom";
function IntroFont(props) {
  AOS.init({ offset: 500, delay: 100, duration: 1000 });
  return (
    <div className="introFont">
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
      <div className="intro_detail" data-aos="fade-up-right">
        <div className="intro_detail_texts">
          <h2>전용서체 보유 장점1</h2>
          <p>
            자사폰트 활용의 예시/장점 담기
            <br /> (무료배포를 통한 브랜드강화. .. 폰트 판매를 통한 부가수익...)
          </p>
        </div>
        <img
          src="https://cdn.pixabay.com/photo/2017/09/06/15/19/blackboard-2721887_960_720.jpg"
          alt=""
        />
      </div>
      <div className="intro_detail" data-aos="fade-up-left">
        <img
          src="https://cdn.pixabay.com/photo/2018/07/08/08/45/abc-3523453_960_720.jpg"
          alt=""
        />
        <div className="intro_detail_texts">
          <h2>전용서체 보유 장점2</h2>
          <p>
            자사폰트 활용의 예시/장점 담기
            <br />
            (무료배포를 통한 브랜드강화. .. 폰트 판매를 통한 부가수익...)
          </p>
        </div>
      </div>
      <div className="intro_detail" data-aos="fade-up-right">
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
      <div className="intro_content">
        <img
          src="https://cdn.pixabay.com/photo/2021/07/02/06/49/dog-6381087_960_720.jpg"
          alt=""
        />
        <div className="intro_content_texts">
          <h2>더욱 빠르게, 가장 합리적으로</h2>
          <p>
            그동안 오래 걸리고 부담되었던 한글 폰트 제작.
            <br /> 얼리폰트의 폰트개발기술은 기존의 폰트 제작시간을 5개월에서 단
            2주로 줄이고,
            <br />
            평균제작단가를 최대 80퍼센트까지 낮추는 성과를 나타냅니다.
          </p>
          <p className="intro_bottom_text">
            고유한 폰트로써 브랜드파워를 확장하려는 스타트업과 중소기업을
            얼리폰트는 응원합니다.
          </p>
        </div>
        <div className="introFont_moveLink">
          <Link to="/portfolio">포트폴리오 보기</Link>
          <Link to="/estimate">견적서다운로드</Link>
        </div>
      </div>
    </div>
  );
}

export default IntroFont;
