import React from "react";

const Sidebar = () => {
  return (
    <div className="admin-sidebar">
      <div className="admin-sidebar_header">Mini Shop</div>
      <div className="admin-sidebar_item">
        <div className="label">system management</div>
        <ul className="menu">
          <li className="item">Categories</li>
          <li className="item">Products</li>
          <li className="item">Order</li>
          <li className="item">Users</li>
          <li className="item">Setting</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
