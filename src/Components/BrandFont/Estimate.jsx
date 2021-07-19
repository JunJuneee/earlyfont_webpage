import React from "react";
import "./Estimate.css";
import { Link } from "react-router-dom";

function Estimate(props) {
  return (
    <div className="estimate">
      <div className="estimate_chart">
        <div className="estimate_chart_content">
          <div className="estimate_chart_content_option">
            <h2>베이직</h2>
            <p>(5백만원)</p>
          </div>
          <div className="estimate_chart_content_title">
            <p>스케치 입수 및 상용글자 제작</p>
          </div>
          <div className="estimate_chart_content_explain">
            한 글자 이상의 의뢰자 스케치를 <br />
            기준으로 2,350자 제작
          </div>
          <div className="estimate_download">
            <p>견적서 다운로드</p>
          </div>
        </div>

        <div className="estimate_chart_content">
          <div className="estimate_chart_content_option">
            <h2>프리미엄</h2>
            <p>(7백만원)</p>
          </div>
          <div className="estimate_chart_content_title">
            <p>상용글자에 대한 기획 폰트 제작</p>
          </div>
          <div className="estimate_chart_content_explain">
            기업 아이덴티티 분석 <br /> 선호스타일 접수
            <br /> 컨셉/디자인기획
            <br /> 2,350자 폰트제작 및 납품
          </div>
          <div className="estimate_download">
            <p>견적서 다운로드</p>
          </div>
        </div>
        <div className="estimate_chart_content">
          <div className="estimate_chart_content_option">
            <h2>베이직플러스</h2>
            <p>(8백만원)</p>
          </div>
          <div className="estimate_chart_content_title">
            <p>스케치 입수 및 전체글자 제작</p>
          </div>
          <div className="estimate_chart_content_explain">
            한 글자 이상의 <br />
            의뢰자 스케치를 기준으로
            <br /> 11,172자 제작
          </div>
          <div className="estimate_download">
            <p>견적서 다운로드</p>
          </div>
        </div>
        <div className="estimate_chart_content">
          <div className="estimate_chart_content_option">
            <h2>프리미엄플러스</h2>
            <p>(1천만원)</p>
          </div>
          <div className="estimate_chart_content_title">
            <p>전체글자에 대한 기획 폰트 제작</p>
          </div>
          <div className="estimate_chart_content_explain">
            기업 아이덴티티 분석
            <br /> 선호스타일 접수
            <br /> 컨셉/디자인기획
            <br /> 2,350자 폰트제작 및 납품
          </div>
          <div className="estimate_download">
            <p>견적서 다운로드</p>
          </div>
        </div>
      </div>
      <div className="estimate_process">
        <img
          src="https://cdn.pixabay.com/photo/2016/03/26/17/45/teacher-1280966_960_720.jpg"
          alt=""
        />
        <img
          src="https://cdn.pixabay.com/photo/2019/03/12/20/27/business-4051773_960_720.jpg"
          alt=""
        />
        <img
          src="https://cdn.pixabay.com/photo/2015/11/19/21/10/glasses-1052010_960_720.jpg"
          alt=""
        />
      </div>
      <div className="introFont_moveLink">
        <Link to="/intro_font">전용서체 소개</Link>
        <Link to="/portfolio">포트폴리오 보기</Link>
      </div>
    </div>
  );
}

export default Estimate;
