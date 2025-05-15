/*import React, { useState } from "react";
import { Form, Input, Button, Checkbox, Alert, Typography } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import Classes from "./Login.module.css";

const { Title } = Typography;

const LoginForm = () => {
  const navigate = useNavigate();
  const [loginError, setLoginError] = useState("");

  const onFinish = (values) => {
    const { username, password } = values;

    const validUsers = [
      { email: "717821l163", password: "student" },
      { email: "717821l159", password: "student" },
    ];

    const isValid = validUsers.some(
      (user) => user.email === username && user.password === password
    );

    if (isValid) {
      setLoginError("");
      navigate("/StudentHome");
    } else {
      setLoginError("Invalid username or password");
    }
  };

  return (
    <div className={Classes.pagecenter}>
      <div className={Classes.logincontainer}>
        <Title level={2} className={Classes.header}>
          Elite Scholar's Student Portal
        </Title>
        <UserOutlined className={Classes.usericon} />

        {loginError && (
          <Alert
            message={loginError}
            type="error"
            showIcon
            style={{ marginBottom: 16 }}
          />
        )}

        <Form
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
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
              <a className={Classes.forgot} href="#g">
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
    </div>
  );
};

export default LoginForm;*/
import React, { useState } from "react";
import { Form, Input, Button, Checkbox, Alert, Typography } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import Classes from "./Login.module.css";

const { Title } = Typography;

const LoginForm = () => {
  const navigate = useNavigate();
  const [loginError, setLoginError] = useState("");

  const onFinish = (values) => {
    const { username, password } = values;

    const validUsers = [
      { email: "717821l163", password: "student" },
      { email: "717821l159", password: "student" },
    ];

    const isValid = validUsers.some(
      (user) => user.email === username && user.password === password
    );

    if (isValid) {
      setLoginError("");
      localStorage.setItem("username", username); // ✅ Save username for header
      navigate("/StudentHome");
    } else {
      setLoginError("Invalid username or password");
    }
  };

  return (
    <div className={Classes.pagecenter}>
      <div className={Classes.logincontainer}>
        <Title level={2} className={Classes.header}>
          Elite Scholar's Student Portal
        </Title>
        <UserOutlined className={Classes.usericon} />

        {loginError && (
          <Alert
            message={loginError}
            type="error"
            showIcon
            style={{ marginBottom: 16 }}
          />
        )}

        <Form
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
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
              <a className={Classes.forgot} href="#g">
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
    </div>
  );
};

export default LoginForm;

