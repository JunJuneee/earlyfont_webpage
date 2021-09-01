import React, { useEffect, useRef, useState } from "react";
import "./Header.css";
import { Link, NavLink } from "react-router-dom";
import { MenuOutlined, Clear } from "@material-ui/icons";

function Header(props) {
  const ref = useRef();

  const [headerColorFlip, setHeaderColorFlip] = useState(false);
  const [click, setClick] = useState(false);

  const handleNav = () => {
    if (window.innerWidth <= 960) {
      setHeaderColorFlip(false);
    } else {
      setHeaderColorFlip(false);
    }
  };

  useEffect(() => {
    if (window.location.pathname === "/") {
      setHeaderColorFlip(true);
    } else {
      setHeaderColorFlip(false);
    }
    if (window.innerWidth <= 960) {
      setHeaderColorFlip(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleNav);
    return () => {
      window.removeEventListener("scroll", handleNav);
    };
  });

  const closeMenu = () => {
    setClick(false);
    setHeaderColorFlip(false);
  };

  return (
    <div
      className={
        headerColorFlip ? "header header_bg_trans" : "header header_bg_white"
      }
      ref={ref}
    >
      <div className="header_container">
        <Link
          to="/"
          onClick={() => {
            setHeaderColorFlip(true);
            setClick(false);
          }}
        >
          <img
            src={`/Images/logo_${headerColorFlip ? "white" : "blue"}.png`}
            alt="logo"
            height="30px"
          />
        </Link>

        <div className="nav_icon" onClick={() => setClick(!click)}>
          {click ? (
            <Clear className="times" />
          ) : (
            <MenuOutlined className="bars" />
          )}
        </div>
        <ul className={click ? "nav_menu active" : "nav_menu"}>
          <NavLink
            to="/branding"
            activeClassName="selected"
            className={
              headerColorFlip
                ? "nav_item nav_item_white"
                : "nav_item nav_item_blue"
            }
            onClick={closeMenu}
          >
            타이포브랜딩
          </NavLink>
          <NavLink
            to="/portfolio"
            activeClassName="selected"
            className={
              headerColorFlip
                ? "nav_item nav_item_white"
                : "nav_item nav_item_blue"
            }
            onClick={closeMenu}
          >
            포트폴리오
          </NavLink>
          <NavLink
            to="/estimate"
            // style={fontColor}
            activeClassName="selected"
            className={
              headerColorFlip
                ? "nav_item nav_item_white"
                : "nav_item nav_item_blue"
            }
            onClick={closeMenu}
          >
            견적문의
          </NavLink>
        </ul>
      </div>
    </div>
  );
}

export default Header;
