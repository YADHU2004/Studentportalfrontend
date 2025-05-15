
import React, { useEffect, useState } from "react";
import { Layout, Typography } from "antd";
import { Link } from "react-router-dom";
import { UserOutlined } from "@ant-design/icons";
import Classes from "./Header.module.css";

const Header = () => {
  const [username, setUsername] = useState("User");

  useEffect(() => {
    const storedUser = localStorage.getItem("username");
    if (storedUser) {
      setUsername(storedUser);
    }
  }, []);

  return (
    <Layout.Header className={Classes.header}>
      <Link to="/StudentHome" className={Classes.titleLink}>
        <Typography.Title level={1} className={Classes.title}>
          Elite Scholar's Student Portal
        </Typography.Title>
      </Link>

      <div className={Classes.userInfo}>
        <UserOutlined className={Classes.icon} />
        <span>Hi, {username}</span>
      </div>
    </Layout.Header>
  );
};

export default Header;


 