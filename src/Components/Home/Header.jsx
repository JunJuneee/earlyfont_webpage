import React from "react";
import logo from "../../Images/logo.png";
import "./Header.css";
import Dropdown from "./Dropdown";
import { Link, useHistory } from "react-router-dom";
import { useState } from "react";
import { MenuOutlined, Clear } from "@material-ui/icons";
import { bubble as Menu } from "react-burger-menu";

function Header() {
  const showSettings = (e) => {
    e.preventDefault();
  };

  const [dropdown, setDropdown] = useState(false);
  const [click, setClick] = useState(false);

  const closeMenu = () => {
    setClick(false);
  };
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
        <Menu right>
          <a id="home" className="menu-item" href="/">
            Home
          </a>
          <a id="about" className="menu-item" href="/about">
            About
          </a>
          <a id="contact" className="menu-item" href="/contact">
            Contact
          </a>
          <a onClick={showSettings} className="menu-item--small" href="">
            Settings
          </a>
        </Menu>
        {/* <div className="nav_items" onClick={() => setClick(!click)}>
          {click ? (
            <Clear className="times" />
          ) : (
            <MenuOutlined className="bars" />
          )}
        </div> */}
        {/* <ul className={click ? "nav_menu active" : "nav_menu"}>
          <li className="nav_item" onClick={closeMenu}>
            <Link to="/intro">얼리폰트의 꿈</Link>
          </li>

          <li
            className="nav_item"
            onClick={closeMenu}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link to="/intro_font ">전용서체 소개</Link>
            {dropdown && <Dropdown />}
          </li>
          <li className="nav_item" onClick={closeMenu}>
            <Link>문의하기</Link>
          </li>
        </ul> */}
      </div>
    </div>
  );
}

export default Header;
