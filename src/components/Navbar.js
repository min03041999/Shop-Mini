import React from "react";
import { Link } from "react-router-dom";

import RoutesAdmin from "../config/RoutesAdmin";
import DropDown from "../common/DropDown";
import DropDownItem from "../common/DropDownItem";

import { dropDownData } from "../menudata/DropDownData";

const Navbar = (props) => {
  const { open } = props;

  return (
    <div className="admin-navbar">
      <div className="admin-navbar_header">
        <DropDown auth="Administrator">
          {dropDownData.map((e, i) => (
            <DropDownItem key={i}>
              <Link className="dropdown-item" to={e.link}>
                <div>{e.icon}</div>
                <div>{e.display}</div>
              </Link>
            </DropDownItem>
          ))}
        </DropDown>
      </div>
      <div className={`admin-navbar_body ${open ? "" : "closed"}`}>
        <div className="admin-navbar_body__container">
          <RoutesAdmin />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
