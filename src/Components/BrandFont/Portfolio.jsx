import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Portfolio.css";
import AOS from "aos";
import axios from "axios";
import { useDispatch } from "react-redux";
import { fontlists, setfontList, pageNum, setPageNum } from "../../Module/user";
import { useSelector } from "react-redux";

function Portfolio(props) {
  AOS.init({ offset: 200, delay: 100, duration: 1500 });
  const dispatch = useDispatch();
  const fontlist = useSelector(fontlists);
  const pageNo = useSelector(pageNum);
  useEffect(() => {
    axios
      .get("/api/fontList")
      .then((res) => dispatch(setfontList(res.data.uploaded_list)));
  }, []);
  return (
    <div className="portfolio">
      <div className="portfolio_list_container">
        {fontlist.slice(0, pageNo * 4).map((item) => (
          <div
            key={item.id}
            className="portfolio_list_white"
            data-aos="flip-left"
          >
            <Link
              to={`/portfolio/${item.title}`}
              className="portfolio_list_link"
            >
              <img className="portfolio_thumnail" src={item.thumnail} alt="" />
            </Link>
          </div>
        ))}
      </div>
      <p
        className="introFont_more"
        onClick={() => {
          dispatch(setPageNum(pageNo + 1));
        }}
      >
        더보기
      </p>
      <div className="branding_link_to mt-4">
        <Link to="/branding">타이포브랜딩 소개</Link>
        <Link to="/estimate">견적문의</Link>
      </div>
    </div>
  );
}

export default Portfolio;
