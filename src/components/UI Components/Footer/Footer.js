import React from "react";
import { Layout } from "antd";
import { CopyrightOutlined } from "@ant-design/icons";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <Layout.Footer className={classes.footer}>
      <div className={classes.footerContent}>
        <CopyrightOutlined />
        &nbsp;2025 Student Portal. All rights reserved.
      </div>
    </Layout.Footer>
  );
};

export default Footer;
