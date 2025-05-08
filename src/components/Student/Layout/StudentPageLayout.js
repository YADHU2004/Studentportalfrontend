import React from "react";
import { Layout } from "antd";
import SideMenu from "../../UI Components/SideMenu/SideMenu";
import Header from "../../UI Components/Header/Header";
import Footer from "../../UI Components/Footer/Footer"; 

const StudentPageLayout = ({ children, menuSelect }) => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header />
      <Layout style={{ background: "white" }}>
        <SideMenu menuSelect={menuSelect} />
        <div style={{ flex: 1, padding: "20px" }}>
          {children}
        </div>
      </Layout>
      <Footer />
    </Layout>
  );
};

export default StudentPageLayout;

