import React, { useState, useEffect, useRef } from "react";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";

const DropDown = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const clickOutsideContent = (e) => {
      if (ref.current !== e.target) {
        setIsOpen(false);
      }
    };
    window.addEventListener("click", clickOutsideContent);
    return () => {
      window.removeEventListener("click", clickOutsideContent);
    };
  }, []);

  return (
    <div className="dropdown">
      <button
        className="dropdown-btn"
        ref={ref}
        onClick={(e) => {
          setIsOpen(!isOpen);
        }}
      >
        {props.auth}
        {isOpen ? (
          <MdOutlineKeyboardArrowUp size={30} />
        ) : (
          <MdOutlineKeyboardArrowDown size={30} />
        )}
      </button>
      <div className={isOpen ? "dropdown-group active" : "dropdown-group"}>
        {props.children}
      </div>
    </div>
  );
};

export default DropDown;
