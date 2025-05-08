import React, { Component } from "react";
import { Result, Button } from "antd";

import StudentPageLayout from "../Student/Layout/StudentPageLayout";

class Error404 extends Component {
  render() {
    return (
      <StudentPageLayout>
        <Result
          status="404"
          title="404"
          subTitle="Sorry, the page you visited does not exist."
          extra={
            <a href="/login">
              <Button type="primary">Back Home</Button>
            </a>
          }
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            background: "#fff"
          }}
        />
      </StudentPageLayout>
    );
  }
}

export default Error404;
