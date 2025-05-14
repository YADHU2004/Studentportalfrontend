/*import React from "react";
import { Divider, Card, Tabs } from "antd";
import StudentPageLayout from "../Layout/StudentPageLayout";

const { TabPane } = Tabs;

// Sample subject-wise assignments for On-Going and Completed
const assignments = {
  TAMIL: {
    ongoing: [
      { title: "Tamil Assignment 1", desc: "Explain what a noun is in Tamil and describe its major types with suitable examples." },
      { title: "Tamil Assignment 2", desc: "Write a 150-word summary of the first part of Kalki’s novel Ponniyin Selvan." },
      { title: "Tamil Assignment 3", desc: "After watching a short film titled “Life is a Lesson,” write an essay expressing your thoughts." }
    ],
    completed: [
      { title: "Tamil Assignment 4", desc: "Write a 6-line poem in Tamil on the topic “A Day at Home.”" },
      { title: "Tamil Assignment 5", desc: "Choose Kural number 391 (from Athurappaal – Illarathiyal) and explain its meaning in dialogue format." }
    ]
  },
  ENGLISH: {
    ongoing: [
      { title: "English Assignment 1", desc: "Write a 200-word essay on how reading books can improve vocabulary, imagination, and overall knowledge." },
      { title: "English Assignment 2", desc: "Write a short summary and explain the message of the poem The Road Not Taken in your own words." },
      { title: "English Assignment 3", desc: "Imagine a full day without electricity at your home. Write a short story or diary entry describing the experience." }
    ],
    completed: [
      { title: "English Assignment 4", desc: "Write a formal letter to your school principal requesting permission to organize a literary club event." },
      { title: "English Assignment 5", desc: "Rewrite 10 given sentences by converting them from present tense to past and future tense respectively." }
    ]
  },
  MATHS: {
    ongoing: [
      { title: "Maths Assignment 1", desc: "Solve any 5 problems involving linear equations and graph their solutions on a Cartesian plane." },
      { title: "Maths Assignment 2", desc: "Write a short explanation of how percentages are used in daily life (e.g., shopping, banking)." },
      { title: "Maths Assignment 3", desc: "Calculate the area and perimeter of 3 given composite shapes and show your working clearly." }
    ],
    completed: [
      { title: "Maths Assignment 4", desc: "Given a set of 10 numbers, find the mean, median, and mode with step-by-step explanation." },
      { title: "Maths Assignment 5", desc: "Solve 5 word problems related to time and work using formulas and appropriate units." }
    ]
  },
  SCIENCE: {
    ongoing: [
      { title: "Science Assignment 1", desc: "Draw a neat diagram of the photosynthesis process and explain each step briefly." },
      { title: "Science Assignment 2", desc: "Write about the different states of matter with examples and explain how matter changes state." },
      { title: "Science Assignment 3", desc: "Create a labeled diagram of the human digestive system and describe the function of each organ." }
    ],
    completed: [
      { title: "Science Assignment 4", desc: "State Ohm’s Law and solve 3 numerical problems involving voltage, current, and resistance." },
      { title: "Science Assignment 5", desc: "Write an essay about types of pollution (air, water, soil, noise) and suggest ways to reduce them." }
    ]
  },
  SOCIAL: {
    ongoing: [
      { title: "Social Assignment 1", desc: "Write a summary on the role of Mahatma Gandhi in India's freedom movement." },
      { title: "Social Assignment 2", desc: "Explain the importance of the Indian Constitution and mention at least 5 fundamental rights." },
      { title: "Social Assignment 3", desc: "Draw a world map and label all continents and oceans neatly." }
    ],
    completed: [
      { title: "Social Assignment 4", desc: "Differentiate between climate and weather with examples from different regions of India." },
      { title: "Social Assignment 5", desc: "Describe how the Panchayati Raj system works and its importance in rural development." }
    ]
  }
};

const tabData = ["TAMIL", "ENGLISH", "MATHS", "SCIENCE", "SOCIAL"];

const AssignmentsTab = ({ title, type }) => (
  <div style={{ margin: "10px", maxWidth: 500, width: "100%" }}>
    <h2>{title}</h2>
    <Tabs defaultActiveKey="TAMIL">
      {tabData.map((subject) => (
        <TabPane tab={subject} key={subject}>
          {assignments[subject][type].map((item, idx) => (
            <Card key={idx} title={item.title} style={{ marginBottom: 16 }}>
              {item.desc}
            </Card>
          ))}
        </TabPane>
      ))}
    </Tabs>
  </div>
);

const AssignmentHome = () => (
  <StudentPageLayout menuSelect="3">
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "20px"
      }}
    >
      <AssignmentsTab title="On-Going" type="ongoing" />
      <AssignmentsTab title="Completed" type="completed" />
    </div>
  </StudentPageLayout>
);

export default AssignmentHome;*/
import React from "react";
import { Divider, Card, Tabs } from "antd";
import StudentPageLayout from "../Layout/StudentPageLayout";
import AssignmentList from "../../UI Components/AssignmentList/AssignmentList";
const { TabPane } = Tabs;

const assignments = {
  TAMIL: {
    ongoing: [
      { title: "Tamil Assignment 1", desc: "Explain what a noun is in Tamil and describe its major types with suitable examples." },
      { title: "Tamil Assignment 2", desc: "Write a 150-word summary of the first part of Kalki’s novel Ponniyin Selvan." },
      { title: "Tamil Assignment 3", desc: "After watching a short film titled “Life is a Lesson,” write an essay expressing your thoughts." }
    ],
    completed: [
      { title: "Tamil Assignment 4", desc: "Write a 6-line poem in Tamil on the topic “A Day at Home.”" },
      { title: "Tamil Assignment 5", desc: "Choose Kural number 391 (from Athurappaal – Illarathiyal) and explain its meaning in dialogue format." }
    ]
  },
  ENGLISH: {
    ongoing: [
      { title: "English Assignment 1", desc: "Write a 200-word essay on how reading books can improve vocabulary, imagination, and overall knowledge." },
      { title: "English Assignment 2", desc: "Write a short summary and explain the message of the poem The Road Not Taken in your own words." },
      { title: "English Assignment 3", desc: "Imagine a full day without electricity at your home. Write a short story or diary entry describing the experience." }
    ],
    completed: [
      { title: "English Assignment 4", desc: "Write a formal letter to your school principal requesting permission to organize a literary club event." },
      { title: "English Assignment 5", desc: "Rewrite 10 given sentences by converting them from present tense to past and future tense respectively." }
    ]
  },
  MATHS: {
    ongoing: [
      { title: "Maths Assignment 1", desc: "Solve any 5 problems involving linear equations and graph their solutions on a Cartesian plane." },
      { title: "Maths Assignment 2", desc: "Write a short explanation of how percentages are used in daily life (e.g., shopping, banking)." },
      { title: "Maths Assignment 3", desc: "Calculate the area and perimeter of 3 given composite shapes and show your working clearly." }
    ],
    completed: [
      { title: "Maths Assignment 4", desc: "Given a set of 10 numbers, find the mean, median, and mode with step-by-step explanation." },
      { title: "Maths Assignment 5", desc: "Solve 5 word problems related to time and work using formulas and appropriate units." }
    ]
  },
  SCIENCE: {
    ongoing: [
      { title: "Science Assignment 1", desc: "Draw a neat diagram of the photosynthesis process and explain each step briefly." },
      { title: "Science Assignment 2", desc: "Write about the different states of matter with examples and explain how matter changes state." },
      { title: "Science Assignment 3", desc: "Create a labeled diagram of the human digestive system and describe the function of each organ." }
    ],
    completed: [
      { title: "Science Assignment 4", desc: "State Ohm’s Law and solve 3 numerical problems involving voltage, current, and resistance." },
      { title: "Science Assignment 5", desc: "Write an essay about types of pollution (air, water, soil, noise) and suggest ways to reduce them." }
    ]
  },
  SOCIAL: {
    ongoing: [
      { title: "Social Assignment 1", desc: "Write a summary on the role of Mahatma Gandhi in India's freedom movement." },
      { title: "Social Assignment 2", desc: "Explain the importance of the Indian Constitution and mention at least 5 fundamental rights." },
      { title: "Social Assignment 3", desc: "Draw a world map and label all continents and oceans neatly." }
    ],
    completed: [
      { title: "Social Assignment 4", desc: "Differentiate between climate and weather with examples from different regions of India." },
      { title: "Social Assignment 5", desc: "Describe how the Panchayati Raj system works and its importance in rural development." }
    ]
  }
};

const tabData = ["TAMIL", "ENGLISH", "MATHS", "SCIENCE", "SOCIAL"];

const AssignmentsTab = ({ title, type }) => (
  <div style={{ margin: "10px", maxWidth: 500, width: "100%" }}>
    <h2>{title}</h2>
    <Tabs defaultActiveKey="TAMIL">
      {tabData.map((subject) => (
        <TabPane tab={subject} key={subject}>
          <AssignmentList
            data={assignments[subject][type]}
            title={title}
            isCompleted={type === "completed"}
          />
        </TabPane>
      ))}
    </Tabs>
  </div>
);

const AssignmentHome = () => (
  <StudentPageLayout menuSelect="3">
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "20px"
      }}
    >
      <AssignmentsTab title="On-Going" type="ongoing" />
      <AssignmentsTab title="Completed" type="completed" />
    </div>
  </StudentPageLayout>
);

export default AssignmentHome;
