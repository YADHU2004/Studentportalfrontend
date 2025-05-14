/*import React, { Component } from "react";
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

export default AssignmetModal;*/
import React, { Component } from "react";
import { Modal, Button, Typography, Upload, message } from "antd";
import { UploadOutlined, DownloadOutlined, CameraOutlined, CheckCircleOutlined } from "@ant-design/icons";

class AssignmentModal extends Component {
  state = {
    visible: false,
    videoStream: null,
    capturedImage: null,
    selectedFile: null,
    loading: false,
    submitted: false // Track submission status
  };

  showModal = () => {
    this.setState({ visible: true });
  };

  handleOk = () => {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({
        loading: false,
        submitted: true // Show success message
      });
      // Close modal after 2 seconds
      setTimeout(() => {
        this.setState({
          visible: false,
          capturedImage: null,
          selectedFile: null,
          submitted: false
        });
        if (this.state.videoStream) {
          this.state.videoStream.getTracks().forEach(track => track.stop());
          this.setState({ videoStream: null });
        }
      }, 2000);
    }, 1000);
  };

  handleCancel = () => {
    this.setState({
      visible: false,
      capturedImage: null,
      selectedFile: null,
      loading: false,
      submitted: false
    });
    if (this.state.videoStream) {
      this.state.videoStream.getTracks().forEach(track => track.stop());
      this.setState({ videoStream: null });
    }
  };

  startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      this.setState({ videoStream: stream, selectedFile: null });
      const video = document.getElementById(`video-${this.props.title}`);
      if (video) {
        video.srcObject = stream;
        video.play();
      }
    } catch (error) {
      console.error("Error accessing camera:", error);
      message.error("Cannot access camera. Please allow permissions.");
    }
  };

  capturePhoto = () => {
    const video = document.getElementById(`video-${this.props.title}`);
    if (!video) return;
    const canvas = document.createElement("canvas");
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    canvas.getContext("2d").drawImage(video, 0, 0);
    const imageData = canvas.toDataURL("image/png");
    this.setState({ capturedImage: imageData });
    this.state.videoStream.getTracks().forEach(track => track.stop());
    this.setState({ videoStream: null });
    message.info("Photo captured!");
  };

  handleFileUpload = (file) => {
    this.setState({ selectedFile: file, capturedImage: null });
    message.info(`Selected: ${file.name}`);
    return false;
  };

  render() {
    const { title, desc, isUploadModal } = this.props;
    const { visible, videoStream, capturedImage, selectedFile, loading, submitted } = this.state;

    return (
      <div>
        {isUploadModal ? (
          <>
            <Button
              type="primary"
              icon={<UploadOutlined />}
              onClick={this.showModal}
              style={{ marginLeft: 10, borderRadius: 4 }}
              className="upload-button"
            >
              Upload
            </Button>
            <Modal
              title={`Upload Assignment: ${title}`}
              open={visible}
              onOk={this.handleOk}
              onCancel={this.handleCancel}
              footer={
                !submitted
                  ? [
                      <Button key="cancel" onClick={this.handleCancel} disabled={loading}>
                        Cancel
                      </Button>,
                      <Button
                        key="submit"
                        type="primary"
                        onClick={this.handleOk}
                        loading={loading}
                        disabled={!capturedImage && !selectedFile}
                      >
                        Submit
                      </Button>
                    ]
                  : null
              }
            >
              {!submitted ? (
                <>
                  <Typography.Text style={{ display: "block", marginBottom: 16 }}>
                    Select or capture your assignment submission:
                  </Typography.Text>
                  <div style={{ textAlign: "center", marginBottom: 20 }}>
                    <Button
                      icon={<CameraOutlined />}
                      onClick={this.startCamera}
                      style={{ marginRight: 10, width: 120 }}
                      disabled={videoStream || capturedImage || selectedFile || loading}
                    >
                      Take Photo
                    </Button>
                    <Upload
                      beforeUpload={this.handleFileUpload}
                      accept="image/*,.pdf,.doc,.docx"
                      showUploadList={false}
                    >
                      <Button
                        icon={<UploadOutlined />}
                        style={{ width: 120 }}
                        disabled={videoStream || capturedImage || selectedFile || loading}
                      >
                        Choose File
                      </Button>
                    </Upload>
                  </div>
                  {selectedFile && (
                    <Typography.Text className="file-name">
                      Selected: {selectedFile.name}
                    </Typography.Text>
                  )}
                  {videoStream && (
                    <div style={{ textAlign: "center", marginBottom: 20 }}>
                      <video
                        id={`video-${title}`}
                        style={{ width: "100%", maxWidth: 300, borderRadius: 4 }}
                      />
                      <Button
                        type="primary"
                        onClick={this.capturePhoto}
                        style={{ marginTop: 10 }}
                        disabled={loading}
                      >
                        Capture Photo
                      </Button>
                    </div>
                  )}
                  {capturedImage && (
                    <div style={{ textAlign: "center", marginBottom: 20 }}>
                      <img
                        src={capturedImage}
                        alt="Captured"
                        style={{ width: "100%", maxWidth: 300, borderRadius: 4 }}
                      />
                    </div>
                  )}
                </>
              ) : (
                <div className="success-message">
                  <CheckCircleOutlined style={{ fontSize: 40, color: "#52c41a" }} />
                  <Typography.Text style={{ display: "block", marginTop: 16, fontSize: 16 }}>
                    Submitted successfully
                  </Typography.Text>
                </div>
              )}
            </Modal>
          </>
        ) : (
          <>
            <Button type="link" onClick={this.showModal}>
              {title}
            </Button>
            <Modal
              title={title}
              open={visible}
              onOk={this.handleOk}
              onCancel={this.handleCancel}
            >
              <Typography.Text>{desc}</Typography.Text>
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
          </>
        )}
      </div>
    );
  }
}

export default AssignmentModal;