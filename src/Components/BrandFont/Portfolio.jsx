import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Portfolio.css";
import AOS from "aos";
import axios from "axios";
import { useDispatch } from "react-redux";
import { fontlists, setfontList } from "../../Module/user";
import { useSelector } from "react-redux";

function Portfolio(props) {
  AOS.init({ offset: 200, delay: 100, duration: 700 });
  const dispatch = useDispatch();
  const fontlist = useSelector(fontlists);
  useEffect(() => {
    axios
      .get("/fontList")
      .then((res) => dispatch(setfontList(res.data.uploaded_list)));
  }, []);
  return (
    <div className="portfolio">
      <div className="portfolio_list_container">
        {fontlist.map((item) => (
          <div key={item.id} className="portfolio_list_white">
            <Link
              to={`/portfolio/${item.title}`}
              className="portfolio_list_link"
            >
              <img className="portfolio_thumnail" src={item.thumnail} alt="" />
            </Link>
          </div>
        ))}
      </div>
      <p className="introFont_more">더보기</p>
      <div className="branding_link_to mt-4">
        <Link to="/branding">타이포브랜딩 소개</Link>
        <Link to="/estimate">견적문의</Link>
      </div>
    </div>
  );
}

export default Portfolio;
