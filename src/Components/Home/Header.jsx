import React from "react";
import logo from "../../Images/logo.png";
import "./Header.css";
import Dropdown from "./Dropdown";
import { Link, useHistory } from "react-router-dom";
import { useState } from "react";

function Header() {
  const [dropdown, setDropdown] = useState(false);
  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };
  return (
    <div className="header">
      <div className="header_container">
        <Link to="/">
          <img src={logo} alt="logo" height="30px" />
        </Link>

        <div className="nav_items">
          <li className="nav_item">
            <Link to="/intro">얼리폰트의 꿈</Link>
          </li>

          <li
            className="nav_item bounce"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link to="/intro_font ">전용서체 소개</Link>
            {dropdown && <Dropdown />}
          </li>
          <li className="nav_item">
            <Link>문의하기</Link>
          </li>
        </div>
      </div>
    </div>
  );
}

export default Header;
