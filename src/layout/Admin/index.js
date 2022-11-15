import React from "react";
import AdminLogin from "../../components/AdminLogin";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";

const Admin = () => {
  // const auth = "titus";
  const auth = null;

  return (
    <>
      {auth === null ? (
        <AdminLogin />
      ) : (
        <section className="admin">
          <Sidebar />
          <Navbar />
        </section>
      )}
    </>
  );
};

export default Admin;
