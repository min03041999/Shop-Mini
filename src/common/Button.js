import React from "react";

const Button = (props) => {
  const { btn } = props;
  return <button className={`btn ${btn}`}>{props.children}</button>;
};

export default Button;
