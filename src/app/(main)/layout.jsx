import BreakingNews from "@/Components/Shared/BreakingNews";
import Heder from "@/Components/Shared/Heder";
import Navbar from "@/Components/Shared/Navbar";
import React, { children } from "react";

const MainLayoutPage = ({ children }) => {
  return (
    <div>
      <Heder />
      <BreakingNews />
      <Navbar />
      <main>{children}</main>
    </div>
  );
};

export default MainLayoutPage;
