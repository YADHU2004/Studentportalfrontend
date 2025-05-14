import React from "react";
import { Layout } from "antd";
import { CopyrightOutlined } from "@ant-design/icons";
import "./App.css";
import StudentHome from "./components/Student/Home/StudentHome";
import AttendancePage from "./components/Student/AttendancePage/AttendancePage";
import Header from "./components/UI Components/Header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Classes from "./index.module.css";
import Error404 from "./components/Error404/Error404";
import AssignmentHome from "./components/Student/Assignment/AssignmentHome";
import RegisterForm from "./components/Register/Register";
import LoginForm from "./components/Login/Login";
import SettingsPage from "./components/Student/Settings/SettingsPage";
import SideMenu from "./components/UI Components/SideMenu/SideMenu";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<StudentHome />} />
        <Route
          path="/login"
          element={
            <Layout.Content>
              <LoginForm />
            </Layout.Content>
          }
        />
        <Route
          path="/register"
          element={
            <Layout.Content>
              <RegisterForm />
            </Layout.Content>
          }
        />
        <Route path="/StudentHome" element={<StudentHome />} />
        <Route path="/student/attendance" element={<AttendancePage />} />
        <Route path="/student/assignments" element={<AssignmentHome />} />
        <Route path="/student/settings" element={<SettingsPage />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </>
  );
}

export default App;
