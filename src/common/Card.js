import React from "react";

const Card = (props) => {
  const { width } = props;
  return (
    <div className="card" style={{ width: `${width}%` }}>
      {props.children}
    </div>
  );
};

export default Card;

export const CartTitle = (props) => {
  return <div className="card-title">{props.children}</div>;
};

export const CardBody = (props) => {
  return <div className="card-body">{props.children}</div>;
};
