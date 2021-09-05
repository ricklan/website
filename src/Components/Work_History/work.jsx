import "./work.css";
import "../../Global/global.css";
import "../../Global/title.css";

export default function Work() {
  return (
    <div>
      <h1 className="title"> Work Experience & Extracurriculars </h1>
      <p> Click on each box for more info </p>

      <div className="timeline">
        {/* PSPC */}
        <div className="container left">
          <div className="event">
            <p className="place">
              <b> Fullstack Developer at PSPC </b> <br></br> (May 2021 - January
              2022)
            </p>
            <ul className="description">
              <li className="task">
                Designed a financial reporting template using Vue, Laravel, and
                Microsoft SQL Server achieving a 75% reduction in submission
                time for clients
              </li>

              <li className="task">
                Overhauled several websites by refactoring their codebase to
                make it more readable, modular and efficient, improving response
                times by 30%
              </li>

              <li className="task">
                Developed Shell scripts to automate time consuming work,
                increasing my team’s productivity by 20%
              </li>

              <li className="task">
                Spearheaded the initiative to update my team’s internal
                documentation, create a Git guide and teach web development and
                SQL to other interns, allowing them to start working earlier by
                1 month
              </li>
            </ul>
          </div>
        </div>

        {/* Note Taker */}
        <div className="container right">
          <div className="event">
            <p className="place">
              <b> Accessibility Note Taker </b> <br></br> (January 2021 - April
              2021)
            </p>
            <ul className="description">
              <li className="task">
                Volunteered to provide academic aid to students who require
                learning accommodations
              </li>

              <li className="task">
                Attended weekly lectures and uploaded error free notes within 24
                hours
              </li>

              <li className="task">
                Increased the marks of students who used my notes to study by
                10%
              </li>
            </ul>
          </div>
        </div>

        {/* TD Work */}
        <div className="container left">
          <div className="event">
            <p className="place">
              <b> IT Analyst at TD Canada Trust </b> <br></br> (May 2019 -
              January 2020)
            </p>
            <ul className="description">
              <li className="task">
                Worked in a fast paced environment to provide support for web
                applications run on Linux servers
              </li>

              <li className="task">
                Resolved complex software issues and led deployment changes by
                communicating effectively with other teams
              </li>

              <li className="task">
                Led the initiative to create a Unix training guide and train new
                team members, allowing them to start working earlier by 2 months
              </li>

              <li className="task">
                Implemented a Python library to automate labour&nbsp;intensive
                tasks, increasing my team’s productivity by over 25%
              </li>
            </ul>
          </div>
        </div>

        {/* Website */}
        <div className="container right">
          <div className="event">
            <p className="place">
              <b> UofT Notes Website </b> <br></br> (January 2017 - Present)
            </p>
            <ul className="description">
              <li className="task">
                Deployed a website using Github Pages to publish and distribute
                my notes for various classes at UofT
              </li>

              <li className="task">
                Increased the marks of students who used my notes to study by
                10%
              </li>

              <li className="task">
                <b>Link: </b>
                <a href="https://rlqyl.github.io/">UofT Notes Website</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
