import React, { useState } from "react";
import "./Dropdown.css";
import { Link } from "react-router-dom";

function Dropdown() {
  const MenuItems = [
    {
      title: "전용서체소개",
      path: "/intro_font",
    },
    {
      title: "포트폴리오",
      path: "/portfolio",
    },
    {
      title: "견적서 다운로드",
      path: "/estimate",
    },
  ];
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <ul
        onClick={handleClick}
        className={click ? "dropdown_menu clicked" : "dropdown_menu"}
      >
        {MenuItems.map((item, index) => {
          return (
            <li className="dropdown_li" key={index}>
              <Link
                className="dropdown_link"
                to={item.path}
                onClick={() => setClick(false)}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Dropdown;
