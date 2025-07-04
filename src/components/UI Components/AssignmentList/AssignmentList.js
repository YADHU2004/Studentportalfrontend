/*import React, { Component } from "react";
import { List, Avatar, Typography, Button } from "antd";
import { DownloadOutlined, UploadOutlined } from "@ant-design/icons";
import AssignmetModal from "../AssignmentModal/AssignmentModal";

class AssignmentList extends Component {
  static defaultProps = {
    isCompleted: false
  };

  render() {
    const filteredData = this.props.data.filter(
      () => Math.floor(Math.random() * 10) > 5
    );

    return (
      <List
        style={{ padding: "0px 20px" }}
        itemLayout="vertical"
        dataSource={filteredData}
        header={
          <Typography.Title level={2} style={{ fontWeight: "normal" }}>
            {this.props.title}
          </Typography.Title>
        }
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
              avatar={
                <Avatar src="https://ui-ex.com/images/book-svg-pen-1.png" />
              }
              title={<AssignmetModal title={item.title} />}
              description={
                <>
                  <Typography.Text>{item.desc}</Typography.Text>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-around",
                      marginTop: 10,
                      flexWrap: "wrap"
                    }}
                  >
                    <Button type="link" icon={<DownloadOutlined />}>
                      Download
                    </Button>
                    {!this.props.isCompleted && (
                      <Button type="link" icon={<UploadOutlined />}>
                        Upload
                      </Button>
                    )}
                  </div>
                </>
              }
            />
          </List.Item>
        )}
      />
    );
  }
}

export default AssignmentList;*/
import React, { Component } from "react";
import { List, Typography, Button } from "antd";
import { DownloadOutlined, UploadOutlined } from "@ant-design/icons";
import AssignmentModal from "../AssignmentModal/AssignmentModal";

class AssignmentList extends Component {
  static defaultProps = {
    isCompleted: false
  };

  render() {
    const { data, title, isCompleted } = this.props;
    console.log("AssignmentList props:", { data, title, isCompleted });

    return (
      <List
        style={{ padding: "0px 20px" }}
        itemLayout="vertical"
        dataSource={data}
        header={
          <Typography.Title level={2} style={{ fontWeight: "normal" }}>
            {title}
          </Typography.Title>
        }
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
              title={<AssignmentModal title={item.title} desc={item.desc} />}
              description={
                <>
                  <Typography.Text>{item.desc}</Typography.Text>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-around",
                      marginTop: 10,
                      flexWrap: "wrap",
                      alignItems: "center"
                    }}
                  >
                    <Button type="link" icon={<DownloadOutlined />}>
                      Download
                    </Button>
                    {!isCompleted && (
                      <AssignmentModal
                        isUploadModal
                        title={item.title}
                        desc={item.desc}
                        key={`upload-${item.title}`}
                      />
                    )}
                  </div>
                </>
              }
            />
          </List.Item>
        )}
      />
    );
  }
}

export default AssignmentList;