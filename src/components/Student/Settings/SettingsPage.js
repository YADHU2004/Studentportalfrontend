import React, { useState } from "react";
import { Card, Tabs, Form, Input, Button, Switch, message } from "antd";
import './SettingsPage.css'; // Custom CSS
import Header from "./../../UI Components/Header/Header";
import Footer from "../../UI Components/Footer/Footer";
const { TabPane } = Tabs;

const SettingsPage = () => {
  const [loading, setLoading] = useState(false);

  const handleProfileUpdate = (values) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      message.success("Profile updated successfully!");
    }, 1000);
  };

  const handlePasswordChange = (values) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      message.success("Password changed successfully!");
    }, 1000);
  };

  return (
    <div>
      <Header/>
    <Card title="Settings" className="cardContainer">
      <Tabs defaultActiveKey="1">
        <TabPane tab="Profile" key="1" className="tabPane">
          <Form layout="vertical" onFinish={handleProfileUpdate}>
            <Form.Item
              label="Name"
              name="name"
              className="formItem"
              rules={[{ required: true, message: 'Please enter your name' }]}
            >
              <Input placeholder="Your name" />
            </Form.Item>

            <Form.Item
              label="Email"
              name="email"
              className="formItem"
              rules={[
                { required: true, message: 'Please enter your email' },
                { type: 'email', message: 'Enter a valid email' }
              ]}
            >
              <Input placeholder="Your email" />
            </Form.Item>

            <Button type="primary" htmlType="submit" loading={loading} className="submitButton">
              Save Changes
            </Button>
          </Form>
        </TabPane>

        <TabPane tab="Change Password" key="2" className="tabPane">
          <Form layout="vertical" onFinish={handlePasswordChange}>
            <Form.Item
              label="Current Password"
              name="currentPassword"
              className="formItem"
              rules={[{ required: true, message: 'Enter your current password' }]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              label="New Password"
              name="newPassword"
              className="formItem"
              rules={[{ required: true, message: 'Enter a new password' }]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              label="Confirm New Password"
              name="confirmPassword"
              dependencies={['newPassword']}
              className="formItem"
              rules={[
                { required: true, message: 'Please confirm your new password' },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue('newPassword') === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(new Error('Passwords do not match'));
                  },
                }),
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Button type="primary" htmlType="submit" loading={loading} className="submitButton">
              Change Password
            </Button>
          </Form>
        </TabPane>

        <TabPane tab="Notifications" key="3" className="tabPane">
          <Form layout="vertical">
            <Form.Item label="Email Notifications" className="formItem">
              <Switch defaultChecked />
            </Form.Item>
            <Form.Item label="SMS Notifications" className="formItem">
              <Switch />
            </Form.Item>
          </Form>
        </TabPane>
      </Tabs>
    </Card>
    <Footer/>
    </div>
  );
};

export default SettingsPage;