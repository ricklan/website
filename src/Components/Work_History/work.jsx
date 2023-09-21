import { useRef } from "react";

import "./work.css";
import "../../Global/global.css";
import "../../Global/title.css";

const info = [
  {
    company: "AWS QuickSight",
    position: "Frontend Engineer 1",
    time: "Nov 2022 - Present",
    tasks: [
      "Developed and maintained an internal React component library built on Material-UI that supports over 60 reusable, aesthetic frontend components that is used by over a dozen teams at AWS Quicksight",
      "Designed and implemented a new Visual Type Selector using React, TypeScript, Jest and React Testing Library that is used by over 20,000 users to create different types of charts on analyses and dashboards, improving user experience by 20%",
    ],
  },
  {
    company: "Amazon Supply Chain",
    position: "Software Engineer 1",
    time: "June - Nov 2022",
    tasks: [
      "Developed a shipment booking portal used by over 300 Amazon vendors to make the booking process simple and efficient",
      "Implemented a new booking system using SpringBoot, React, Typescript, and AWS DynamoDB, with complete ownership of the entire process (design, development, unit and end-to-end testing), to ensure vendors are paid on time for their merchandise, preventing them from taking on expensive loans and reducing their expenses by $7 million per year, collectively",
      "Took the initiative to create an oncall runbook and an end-to-end business flow chart, reducing the investigation time of common tickets by 90% and allowing new employees to start oncall 1 month earlier",
    ],
  },
  {
    company: "UTSC",
    position: "CSCB20 TA",
    time: "January - April 2022",
    tasks: [
      "Teaching assistant to 2 tutorials of 20 students each, educating them on HTML, JavaScript, CSS, Flask, SQL, web development and Git, and receiving a TA evaluation score of 4.5/5",
      "Pioneered the usage of cloud platforms by getting students to deploy their final project on Heroku, giving students their first introduction into cloud computing and experience with deploying a fullstack web application",
    ],
  },
  {
    company: "UTSC",
    position: "CSCC43 TA",
    time: "Sept 2021 - January 2022",
    tasks: [
      "Teaching assistant to 2 tutorials of 20 students each, educating them on SQL, Database design, and ER diagrams, and receiving a TA evaluation score of 4.5/5",
      "Took the initiative to create and publish supplemental lecture notes, helping 60% more students understand the concepts better",
      "Answered questions on the course discussion board quickly, decreasing wait time by 20%",
    ],
  },
  {
    company: "PSPC",
    position: "Software Engineer Intern",
    time: "May 2021 - January 2022",
    tasks: [
      "Engineered a financial reporting system using Vue, Laravel, and Microsoft SQL Server that streamlines the financial reporting process for crown corporations, reducing the entire process by 3 hours",
      "Mentored 5 interns by taking the initiative to educate them on Git, web development fundamentals and SQL, increasing their productivity and empowering them to contribute effectively to the team's projects",
    ],
  },
  {
    company: "TD Canada Trust",
    position: "L2 IT Analyst",
    time: "May 2019 - January 2020",
    tasks: [
      "Worked in a fast paced environment to provide support for web applications run on Unix servers, improving uptime to 95%",
      "Increased my team's productivity by over 75% by implementing a Python library to automate labour intensive tasks",
    ],
  },
];

export default function Work() {
  const counter = useRef(1);

  const getDirection = () => {
    const direction = counter.current % 2 === 0 ? "right" : "left";
    counter.current += 1;
    return direction;
  };

  return (
    <div>
      <h1 className="title"> Work Experience </h1>

      <div className="timeline">
        {info.map((key, i) => {
          const { company, position, time, tasks } = key;
          const direction = getDirection();
          return (
            <div className={`container ${direction}`} key={i}>
              <div className="event">
                <p className="place">
                  <b>{company}</b> - {position} <br></br> ({time})
                </p>
                <ul>
                  {tasks.map((taskKey, i) => {
                    return <li key={i}>{taskKey}</li>;
                  })}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
