import React, { useEffect, useRef, useState } from "react";
import logo from "./Images/logo.png";
import "./Header.css";
import { Link, NavLink, useHistory } from "react-router-dom";
import { MenuOutlined, Clear } from "@material-ui/icons";

function Header() {
  const ref = useRef();
  const [fontColor, setFontColoe] = useState({ color: "white" });
  const handleNav = () => {
    let currentScrollY = window.scrollY;
    if (currentScrollY < 60) {
      ref.current.style.backgroundColor = "transparent";
      setFontColoe({ color: "white" });
    } else {
      ref.current.style.backgroundColor = "white";
      setFontColoe({ color: "rgb(024, 024, 99)" });
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleNav);
    return () => {
      window.removeEventListener("scroll", handleNav);
    };
  });

  const showSettings = (e) => {
    e.preventDefault();
  };

  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const closeMenu = () => {
    setClick(false);
  };

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);
  window.addEventListener("resize", showButton);
  return (
    <div className="header" ref={ref}>
      <div className="header_container">
        <Link to="/">
          <img src={logo} alt="logo" height="30px" />
        </Link>

        <div className="nav_icon" onClick={() => setClick(!click)}>
          {click ? (
            <Clear className="times" />
          ) : (
            <MenuOutlined className="bars" />
          )}
        </div>
        <ul className="nav_menu">
          <NavLink
            to="/intro"
            style={fontColor}
            activeClassName="active"
            className="nav_item"
            onClick={closeMenu}
          >
            폰트브랜딩
          </NavLink>
          <NavLink
            to="/portfolio"
            style={fontColor}
            activeClassName="active"
            className="nav_item"
            onClick={closeMenu}
          >
            포트폴리오
          </NavLink>
          <NavLink
            to="/estimate"
            style={fontColor}
            activeClassName="active"
            className="nav_item"
            onClick={closeMenu}
          >
            견적다운로드
          </NavLink>
          <NavLink
            to="/portfolio"
            style={fontColor}
            activeClassName="active"
            className="nav_item"
            onClick={closeMenu}
          >
            문의하기
          </NavLink>
        </ul>
      </div>
    </div>
  );
}

export default Header;
