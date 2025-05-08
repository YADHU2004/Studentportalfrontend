
import React, { useState } from "react";
import { Form, Input, Button, Checkbox, Alert } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import Classes from "./Login.module.css";
import StudentHome from "../Student/Home/StudentHome";

const LoginForm = () => {
  const navigate = useNavigate();
  const [loginError, setLoginError] = useState("");

  const onFinish = (values) => {
    const { username, password } = values;

    const validUsers = [
      { email: "717821l163@gmail.com", password: "student" },
      { email: "717821l101@gmail.com", password: "student" }
    ];

    const isValid = validUsers.some(
      (user) => user.email === username && user.password === password
    );

    if (isValid) {
      setLoginError(""); // clear error if previously shown
      navigate("/StudentHome"); // redirect to StudentHome
    } else {
      setLoginError("Invalid username or password");
    }
  };

  return (
    <div className={Classes.pagecenter}>
      {loginError && (
        <Alert
          message={loginError}
          type="error"
          showIcon
          style={{ marginBottom: 16, width: 300 }}
        />
      )}
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <Form.Item>
          <UserOutlined style={{ fontSize: 60, color: "#006691" }} />
        </Form.Item>

        <Form.Item
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input
            prefix={<UserOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
            placeholder="Username"
          />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password
            prefix={<LockOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
            placeholder="Password"
          />
        </Form.Item>

        <Form.Item>
          <div className={Classes.lola}>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>
            <a className="login-form-forgot" href="#g">
              Forgot password
            </a>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
              style={{ width: "100%", marginTop: "10px" }}
            >
              Log in
            </Button>
            <div style={{ marginTop: "10px" }}>Or</div>
          </div>
          <div style={{ marginTop: "10px", textAlign: "center" }}>
  New user?{" "}
  <Button type="link" onClick={() => navigate("/register")}>
    Register
  </Button>
</div>

        </Form.Item>
      </Form>
    </div>
  );
};

export default LoginForm;




