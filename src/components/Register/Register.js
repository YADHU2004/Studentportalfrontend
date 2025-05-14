/*import React from "react";
import { Form, Input, Tooltip, Select, Checkbox, Button } from "antd";
import { InfoCircleOutlined } from "@ant-design/icons";
import Classes from "./Register.module.css";

const { Option } = Select;

const RegisterForm = () => {
  const [form] = Form.useForm();

  return (
    <div className={Classes.pagecenter}>
        <div className={Classes.registerFormContainer}>
        <h2 className={Classes.formTitle}>Create Account</h2> 
      <Form
        form={form}
        layout="horizontal"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ prefix: "91", agreement: false }}
      >
        <Form.Item
          label="E-mail"
          name="email"
          rules={[
            { type: "email", message: "The input is not valid E-mail!" },
            { required: true, message: "Please input your E-mail!" },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
          hasFeedback
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          label="Confirm Password"
          name="confirm"
          dependencies={['password']}
          hasFeedback
          rules={[
            { required: true, message: "Please confirm your password!" },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject("Passwords do not match!");
              },
            }),
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          label={
            <span>
              Username&nbsp;
              <Tooltip title="What do you want others to call you?">
                <InfoCircleOutlined />
              </Tooltip>
            </span>
          }
          name="username"
          rules={[
            { required: true, message: "Please input your username!", whitespace: true },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Phone Number"
          name="phone"
          rules={[{ required: true, message: "Please input your phone number!" }]}
        >
          <Input
            addonBefore={
              <Form.Item name="prefix" noStyle>
                <Select style={{ width: 70 }}>
                  <Option value="91">+91</Option>
                </Select>
              </Form.Item>
            }
            style={{ width: "100%" }}
          />
        </Form.Item>

        <Form.Item
          name="agreement"
          valuePropName="checked"
          wrapperCol={{ offset: 8, span: 16 }}
        >
          <Checkbox>
            I have read the <a href="#g">agreement</a>
          </Checkbox>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <a href="/me">
            <Button type="primary">Register</Button>
          </a>
        </Form.Item>
      </Form>
    </div>
    </div>
  );
};

export default RegisterForm;*/
import React from "react";
import { Form, Input, Tooltip, Select, Checkbox, Button } from "antd";
import { InfoCircleOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import Classes from "./Register.module.css";

const { Option } = Select;

const RegisterForm = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate(); // Initialize navigate

  const onFinish = () => {
    navigate("/login"); // Navigate to login page on successful form submission
  };

  return (
    <div className={Classes.pagecenter}>
      <div className={Classes.registerFormContainer}>
        <h2 className={Classes.formTitle}>Create Account</h2>
        <Form
          form={form}
          layout="horizontal"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ prefix: "91", agreement: false }}
          onFinish={onFinish} // Add onFinish handler
        >
          <Form.Item
            label="E-mail"
            name="email"
            rules={[
              { type: "email", message: "The input is not valid E-mail!" },
              { required: true, message: "Please input your E-mail!" },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
            hasFeedback
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            label="Confirm Password"
            name="confirm"
            dependencies={["password"]}
            hasFeedback
            rules={[
              { required: true, message: "Please confirm your password!" },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject("Passwords do not match!");
                },
              }),
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            label={
              <span>
                Username&nbsp;
                <Tooltip title="What do you want others to call you?">
                  <InfoCircleOutlined />
                </Tooltip>
              </span>
            }
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your username!",
                whitespace: true,
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Phone Number"
            name="phone"
            rules={[
              { required: true, message: "Please input your phone number!" },
            ]}
          >
            <Input
              addonBefore={
                <Form.Item name="prefix" noStyle>
                  <Select style={{ width: 70 }}>
                    <Option value="91">+91</Option>
                  </Select>
                </Form.Item>
              }
              style={{ width: "100%" }}
            />
          </Form.Item>

          <Form.Item
            name="agreement"
            valuePropName="checked"
            wrapperCol={{ offset: 8, span: 16 }}
          >
            <Checkbox>
              I have read the <a href="#g">agreement</a>
            </Checkbox>
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Register
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default RegisterForm;
