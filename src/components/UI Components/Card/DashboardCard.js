import React, { Component } from "react";
import { Card } from "antd";
import Classes from "./Card.module.css";

const { Meta } = Card;

class DashboardCard extends Component {
  render() {
    return (
      <a href={this.props.link} style={{ textDecoration: "none" }}>
        <Card
          hoverable
          className={Classes.card}
          cover={
            <img
              alt="example"
              src={this.props.imageURL}
              style={{ height: 250 }}
            />
          }
        >
          <Meta title={this.props.title} />
        </Card>
      </a>
    );
  }
}

export default DashboardCard;
