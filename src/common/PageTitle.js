import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const PageTitle = (props) => {
  return (
    <div className="page-title">
      MiniShop <MdOutlineKeyboardArrowRight />
      {props.children}
    </div>
  );
};

export default PageTitle;
