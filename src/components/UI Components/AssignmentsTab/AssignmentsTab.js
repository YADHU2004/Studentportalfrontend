import React, { Component } from "react";
import { Tabs, Tag } from "antd";
import AssignmentList from "../AssignmentList/AssignmentList";

const { TabPane } = Tabs;

class AssignmentsTab extends Component {
  static defaultProps = {
    isCompleted: false,
  };

  render() {
    const cardStyle = {
      width: "600px",
      height: "fit-content",
      background: "white",
      marginTop: "30px",
    };

    return (
      <Tabs defaultActiveKey="0" style={cardStyle}>
        {this.props.tabData.map((subjectCode, index) => (
          <TabPane
            tab={
              <span>
                {subjectCode}
                <Tag
                  color="#00000000"
                  style={{
                    borderRadius: "50%",
                    marginLeft: 5,
                    color: "black",
                    border: "rgba(0,0,0,0.1) 1px solid",
                  }}
                >
                  <strong>{Math.floor(Math.random() * 5)}</strong>
                </Tag>
              </span>
            }
            key={index.toString()}
          >
            <AssignmentList
              data={this.props.data}
              title={this.props.title}
              isCompleted={this.props.isCompleted}
            />
          </TabPane>
        ))}
      </Tabs>
    );
  }
}

export default AssignmentsTab;
