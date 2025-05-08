/*import React from "react";
import { Layout } from "antd";
import DashboardCard from "../../UI Components/Card/DashboardCard";
import StudentPageLayout from "../Layout/StudentPageLayout";

import StudentClasses from "../StudentHome.module.css";

const { Content } = Layout;

class StudentHome extends React.Component {
  render() {
    return (
      <StudentPageLayout menuSelect="1">
        <Content className={StudentClasses.dashboard}>
          <DashboardCard
            imageURL="https://factohr.com/wp-content/uploads/2019/03/attendance-system/attendancesystem.png"
            title="Attendance"
          />
          <DashboardCard
            imageURL="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwmgYEUwvWfI5ivwD5eXaBGzR35wdzrjI-B1MDYIBK9PJBSrwF-A"
            title="Assignments"
          />
          <DashboardCard
            imageURL="https://png.pngtree.com/svg/20150921/eb09b8c59e.svg"
            title="Settings"
          />
        </Content>
      </StudentPageLayout>
    );
  }
}

export default StudentHome;*/
import React from "react";
import { Layout } from "antd";
import DashboardCard from "../../UI Components/Card/DashboardCard";
import StudentPageLayout from "../Layout/StudentPageLayout";

import StudentClasses from "../StudentHome.module.css";

const { Content } = Layout;

class StudentHome extends React.Component {
  render() {
    return (
      <StudentPageLayout menuSelect="1">
        <Content className={StudentClasses.dashboard}>
          <a href="/student/attendance" style={{ textDecoration: 'none' }}>
            <DashboardCard
              imageURL="https://hrsoftware.in/wp-content/uploads/2023/04/Choosing-The-Right-Attendance-Management-System-839x480.jpg"
              title="Attendance"
            />
          </a>

          <a href="/student/assignments" style={{ textDecoration: 'none' }}>
            <DashboardCard
              imageURL="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwmgYEUwvWfI5ivwD5eXaBGzR35wdzrjI-B1MDYIBK9PJBSrwF-A"
              title="Assignments"
            />
          </a>

          <a href="/student/settings" style={{ textDecoration: 'none' }}>
            <DashboardCard
              imageURL="data:image/png;base64,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"
              title="Settings"
            />
          </a>
        </Content>
      </StudentPageLayout>
    );
  }
}

export default StudentHome;

