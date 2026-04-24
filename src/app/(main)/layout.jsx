import Heder from "@/Components/Shared/Heder";
import Navbar from "@/Components/Shared/Navbar";
import React, { children } from "react";

const MainLayoutPage = ({ children }) => {
  return (
    <div>
      <Heder />
      <Navbar />
      <main>{children}</main>
    </div>
  );
};

export default MainLayoutPage;
