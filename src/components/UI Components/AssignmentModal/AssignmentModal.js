import React, { Component } from "react";
import { Modal, Button, Typography } from "antd";
import { UploadOutlined, DownloadOutlined } from "@ant-design/icons";

class AssignmetModal extends Component {
  state = { visible: false };

  showModal = () => {
    this.setState({ visible: true });
  };

  handleOk = () => {
    this.setState({ visible: false });
  };

  handleCancel = () => {
    this.setState({ visible: false });
  };

  render() {
    const { title } = this.props;
    return (
      <div>
        <Button type="link" onClick={this.showModal}>
          {title}
        </Button>
        <Modal
          title={title}
          open={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <Typography.Text>
            Cupidatat qui pariatur proident pariatur minim ex. Excepteur ex nisi
            fugiat laborum ullamco. Exercitation nostrud excepteur minim qui
            sunt exercitation. Ex sit id magna ullamco et qui ad tempor veniam
            ut voluptate laboris ipsum. Eiusmod pariatur minim incididunt in
            sint sint laborum anim occaecat occaecat nisi esse. Mollit magna in
            est cupidatat sint eu elit fugiat irure.
          </Typography.Text>
          <br />
          <br />
          <Typography.Text>Last Date of Submission: 27-08-2019</Typography.Text>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              marginTop: 25
            }}
          >
            <Button style={{ marginRight: 10 }} icon={<UploadOutlined />}>
              Upload
            </Button>
            <Button icon={<DownloadOutlined />}>Download</Button>
          </div>
        </Modal>
      </div>
    );
  }
}

export default AssignmetModal;
