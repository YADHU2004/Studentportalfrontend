import React, { Component } from "react";
import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";
import Classes from "../../../index.module.css";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  CalendarOutlined,
  BookOutlined,
  SettingOutlined,
  LogoutOutlined
} from "@ant-design/icons";

class SideMenu extends Component {
  state = {
    collapsed: true
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };

  render() {
    const { Sider } = Layout;

    return (
      <Sider
        trigger={null}
        theme="light"
        collapsible
        collapsed={this.state.collapsed}
      >
        {this.state.collapsed ? (
          <MenuUnfoldOutlined
            className="trigger"
            onClick={this.toggle}
            style={{
              fontSize: 25,
              marginTop: 25,
              textAlign: "center",
              width: "100%"
            }}
          />
        ) : (
          <MenuFoldOutlined
            className="trigger"
            onClick={this.toggle}
            style={{
              fontSize: 25,
              marginTop: 25,
              textAlign: "right",
              width: "100%"
            }}
          />
        )}

        <Menu
          theme="light"
          mode="inline"
          className={Classes.sideNav}
          defaultSelectedKeys={[this.props.menuSelect]}
        >
          <Menu.Item key="1" icon={<UserOutlined />}>
            <Link to="/studenthome">Dashboard</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<CalendarOutlined />}>
            <Link to="/student/attendance">Attendance</Link>
          </Menu.Item>
          <Menu.Item key="3" icon={<BookOutlined />}>
            <Link to="/student/assignments">Assignments</Link>
          </Menu.Item>
          <Menu.Item key="4" icon={<SettingOutlined />}>
            <Link to="/student/settings">Settings</Link>
          </Menu.Item>
          <Menu.Item key="5" icon={<LogoutOutlined />}>
            <Link to="/Login">Log Out</Link>
          </Menu.Item>
        </Menu>
      </Sider>
    );
  }
}

export default SideMenu;
 