import Navbar from "@/Components/Shared/Navbar";
import React, { children } from "react";
import { montserrat } from "../layout";

const AuthLayoutPage = ({ children }) => {
  return (
    <div className={`${montserrat.className}`}>
      <Navbar />
      <main>{children}</main>
    </div>
  );
};

export default AuthLayoutPage;
