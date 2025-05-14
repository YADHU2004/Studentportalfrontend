import React, { Component } from "react";
import { Layout, Typography } from "antd";
import { Link } from "react-router-dom"; // Import Link
import Classes from "./Header.module.css";

class Header extends Component {
  render() {
    return (
      <Layout.Header className={Classes.header}>
        <Link to="/StudentHome" className={Classes.link}>
          <Typography.Title level={1} className={Classes.title}>
          Elite Scholar's Student Portal
          </Typography.Title>
        </Link>
      </Layout.Header>
    );
  }
}

export default Header;
