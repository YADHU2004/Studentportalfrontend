/*import React, { Component } from "react";
import { Layout, Typography } from "antd";
import { Link } from "react-router-dom"; 
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

export default Header;*/
import React, { Component } from "react";
import { Layout, Typography } from "antd";
import { Link } from "react-router-dom";
import { UserOutlined } from "@ant-design/icons";
import Classes from "./Header.module.css";

class Header extends Component {
  render() {
    const username = localStorage.getItem("username") || "User";
    const userType = localStorage.getItem("userType") || "student";
    const title =
      userType === "admin"
        ? "Elite Scholar's Admin Portal"
        : "Elite Scholar's Student Portal";

    return (
      <Layout.Header className={Classes.header}>
        <Link to={userType === "admin" ? "/admin" : "/StudentHome"} className={Classes.link}>
          <Typography.Title level={1} className={Classes.title}>
            {title}
          </Typography.Title>
        </Link>
        <div className={Classes.userSection}>
          <UserOutlined style={{ marginRight: 8, color: "#fff" }} />
          <Typography.Text style={{ color: "#fff" }}>
            Hi, {username}
          </Typography.Text>
        </div>
      </Layout.Header>
    );
  }
}

export default Header;