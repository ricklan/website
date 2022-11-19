import "./work.css";
import "../../Global/global.css";
import "../../Global/title.css";

const info = {
  Amazon: {
    company: "Amazon Supply Chain",
    position: "SDE 1",
    languages: ["Springboot", "React", "TypeScript", "Git", "AWS"],
    tenure: "June - Nov 2022",
    tasks: {
      task1:
        "Decreased traffic latency by 20% by migrating the usage of a new Amazon translation tool",
      task2:
        "Reduced customer complaints by 50% by investigating and fixing the root causes of the most common user defects",
      task3:
        "Coordinated and led a major project across half a dozen teams to ensure 25% more vendors are paid on time",
    },
  },
  CSCB20: {
    company: "UTSC",
    position: "CSCB20 TA",
    languages: [
      "HTML",
      "CSS",
      "JavaScript",
      "Flask",
      "SQL",
      "Git",
      "Web Development",
    ],
    tenure: "January - April 2022",
    tasks: {
      task1:
        "Taught HTML, CSS, JavaScript, Flask, SQL, Git and Web Development to 50% of the class, helping them understand concepts and lecture materials better",
      task2:
        "Took the initiative to create and publish supplemental lecture videos on web development and SQL, helping 75% more students understand the concepts better",
      task3:
        "Answered questions on the course discussion board quickly, decreasing wait time by 20%",
    },
  },
  CSCC43: {
    company: "UTSC",
    position: "CSCC43 TA",
    languages: [
      "SQL",
      "PostgreSQL",
      "ER Diagrams",
      "Database Design Principles",
    ],
    tenure: "Sept 2021 - January 2022",
    tasks: {
      task1:
        "Taught SQL, ER diagrams and database design practices to 50% of the class, helping them understand concepts and lecture materials better",
      task2:
        "Took the initiative to create and publish supplemental lecture notes, helping 60% more students understand the concepts better",
      task3:
        "Answered questions on the course discussion board quickly, decreasing wait time by 20%",
    },
  },
  PSPC: {
    company: "PSPC",
    position: "Fullstack Developer",
    languages: ["Vue.JS", "Laravel", "Microsoft SQL Server", "Git/Bitbucket"],
    tenure: "May 2021 - January 2022",
    tasks: {
      task1:
        "Designed a financial reporting template using Vue, Laravel, and Microsoft SQL Server achieving a 75% reduction in submission time for clients",
      task2:
        "Overhauled several websites by refactoring their codebase to make it more readable, modular and efficient, improving response times by 30%",
      task3:
        "Spearheaded the initiative to update my team's internal documentation, create a Git guide and teach web development and SQL to other interns, reducing their training time by 25%",
    },
  },
  TD: {
    company: "TD Canada Trust",
    position: "L2 IT Analyst",
    languages: ["Python", "Unix"],
    tenure: "May 2019 - January 2020",
    tasks: {
      task1:
        "Worked in a fast paced environment to provide support for web applications run on Unix servers, improving uptime to 95%",
      task2:
        "Coordinated deployment of new features with multiple teams to minimize effort and ensure completion within 8 hours",
      task3:
        "Reduced onboarding time for new team members by 50% by spearheading the initiative to author a holistic training and documentation package",
      task4:
        "Increased my team's productivity by over 75% by implementing a Python library to automate labour intensive tasks",
    },
  },
};

let counter = 1;
function getDirection() {
  let direction = counter % 2 === 0 ? "right" : "left";
  counter += 1;
  return direction;
}

export default function Work() {
  return (
    <div>
      <h1 className="title"> Work Experience </h1>

      <div className="timeline">
        {Object.keys(info).map((key, i) => {
          return (
            <div className={"container " + getDirection()} key={i}>
              <div className="event">
                <p className="place">
                  <b>{info[key].company}</b> - {info[key].position} <br></br> (
                  {info[key].tenure})
                </p>

                {/* Tasks */}
                {Object.keys(info[key].tasks).map((taskKey, i) => {
                  return <p key={i}> {info[key].tasks[taskKey]} </p>;
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
