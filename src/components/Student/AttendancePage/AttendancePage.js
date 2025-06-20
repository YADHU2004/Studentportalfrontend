/*import React, { Component } from "react";
import AttendanceCard from "../../UI Components/Calender/AttendanceCard";
import StudentPageLayout from "../Layout/StudentPageLayout";
import { Typography } from "antd";
import './AttendancePage.css';



class AttendancePage extends Component {
  render() {
    return (
      <StudentPageLayout menuSelect="2">
        <div style={{ marginTop: 20, overflow: 'scroll', width: '100%' }}>
          <Typography.Title
            style={{
              textAlign: "center",
              color: "rgba(0, 0, 0, 0.6)",
              fontWeight: "bold"
            }}
          >
            Subject Wise Attendance Percent
          </Typography.Title>
          <div className='attendancePage'>
            <AttendanceCard subject="TAMIL" attendance={{ p: 60, a: 40 }} />
            <AttendanceCard subject="ENGLISH" attendance={{ p: 70, a: 30 }} />
            <AttendanceCard subject="MATHS" attendance={{ p: 50, a: 45 }} />
            <AttendanceCard subject="SCIENCE" attendance={{ p: 75, a: 25 }} />
            <AttendanceCard subject="SOCIAL" attendance={{ p: 85, a: 15 }} />
          </div>
        </div>
      </StudentPageLayout>
    );
  }
}

export default AttendancePage;*/
import React, { Component } from "react";
import AttendanceCard from "../../UI Components/Calender/AttendanceCard";
import StudentPageLayout from "../Layout/StudentPageLayout";
import { Typography } from "antd";
import './AttendancePage.css';

class AttendancePage extends Component {
  render() {
    // Sample data with totalDays and presentDays for each subject
    const subjects = [
      { subject: "TAMIL", attendance: { p: 60, a: 40 }, totalDays: 100, presentDays: 60 },
      { subject: "ENGLISH", attendance: { p: 70, a: 30 }, totalDays: 100, presentDays: 70 },
      { subject: "MATHS", attendance: { p: 50, a: 45 }, totalDays: 100, presentDays: 50 },
      { subject: "SCIENCE", attendance: { p: 75, a: 25 }, totalDays: 100, presentDays: 75 },
      { subject: "SOCIAL", attendance: { p: 85, a: 15 }, totalDays: 100, presentDays: 85 },
    ];

    return (
      <StudentPageLayout menuSelect="2">
        <div style={{ marginTop: 20, overflow: 'scroll', width: '100%' }}>
          <Typography.Title
            style={{
              textAlign: "center",
              color: "rgba(0, 0, 0, 0.6)",
              fontWeight: "bold"
            }}
          >
            Subject Wise Attendance Percent
          </Typography.Title>
          <div className='attendancePage'>
            {subjects.map((item, index) => (
              <AttendanceCard
                key={index}
                subject={item.subject}
                attendance={item.attendance}
                totalDays={item.totalDays}
                presentDays={item.presentDays}
              />
            ))}
          </div>
        </div>
      </StudentPageLayout>
    );
  }
}

export default AttendancePage;