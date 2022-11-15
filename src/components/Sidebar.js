import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  MdKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import { navData } from "../menudata/SidebarData";

import LogoFox from "../assets/images/logo-fox.png";

const Sidebar = (props) => {
  const { open, setOpen } = props;
  const toggleOpen = () => {
    setOpen(!open);
  };

  const { pathname } = useLocation();
  const active = navData.findIndex((e) => e.link === pathname);

  return (
    <div className={open ? "sidebar_open" : "sidebar_closed"}>
      <div className="admin-sidebar">
        <div>
          <div className="admin-sidebar_header">
            <img src={LogoFox} alt="LogoFox" />
            {open ? "MiniShop" : ""}
          </div>
        </div>
        <button className="admin-sidebar_button" onClick={toggleOpen}>
          {open ? (
            <MdKeyboardArrowLeft size={30} />
          ) : (
            <MdOutlineKeyboardArrowRight size={30} />
          )}
        </button>
        {navData.map((item, i) => {
          return (
            <Link
              key={item.id}
              className={`admin-sidebar_item ${i === active ? "active" : ""}`}
              to={item.link}
            >
              {item.icon}
              <span className={open ? "link_open" : "link_closed"}>
                {item.text}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
