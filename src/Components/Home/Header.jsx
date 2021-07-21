import React, { useEffect, useRef, useState } from "react";
import logo from "../../Images/logo.png";
import "./Header.css";
import Dropdown from "./Dropdown";
import { Link, useHistory } from "react-router-dom";
import { MenuOutlined, Clear } from "@material-ui/icons";

function Header() {
  const currentScrollY = window.scrollY;
  const ref = useRef();

  useEffect(() => {
    if (currentScrollY > 80) {
      ref.current.style.backgroundColor = "transparent";
    }
    console.log(currentScrollY);
  }, [currentScrollY]);
  const showSettings = (e) => {
    e.preventDefault();
  };

  const [dropdown, setDropdown] = useState(false);
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

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
        <ul className={click ? "nav_menu active" : "nav_menu"}>
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
        </ul>
      </div>
    </div>
  );
}

export default Header;
