import React, { useState } from "react";

import AdminLogin from "../../components/AdminLogin";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";

const Admin = () => {
  const auth = "titus";
  // const auth = null;
  const [open, setOpen] = useState(true);

  return (
    <>
      {auth === null ? (
        <AdminLogin />
      ) : (
        <section>
          <Sidebar open={open} setOpen={setOpen} />
          <Navbar open={open} />
        </section>
      )}
    </>
  );
};

export default Admin;
