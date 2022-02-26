import "./work.css";
import "../../Global/global.css";
import "../../Global/title.css";

export default function Work() {
  return (
    <div>
      <h1 className="title"> Work Experience </h1>
      <p> Click on each box for more info </p>

      <div className="timeline">
        {/* CSCB20 TA */}
        <div className="container left">
          <div className="event">
            <p className="place">
              <b> UTSC Teaching Assistant for CSCB20 </b> <br></br> (January -
              April 2022)
            </p>
            <ul className="description">
              <li className="task">
                Taught SQL, HTML, CSS, JavaScript and Flask 50% of the class,
                helping them understand concepts and lecture materials better
              </li>

              <li className="task">
                Took the initiative to create and publish supplemental lecture
                videos on web dev and SQL, helping 30% more students understand
                the concepts better
              </li>

              <li className="task">
                Answered questions on the course discussion board quickly,
                decreasing wait time by 20%
              </li>
            </ul>
          </div>
        </div>
        {/* CSCC43 TA */}
        <div className="container right">
          <div className="event">
            <p className="place">
              <b> UTSC Teaching Assistant for CSCC43 </b> <br></br> (Sept 2021 -
              January 2022)
            </p>
            <ul className="description">
              <li className="task">
                Taught SQL, ER diagrams and database design practices to 50% of
                the class, helping them understand concepts and lecture
                materials better
              </li>

              <li className="task">
                Took the initiative to create and publish supplemental lecture
                notes, helping 15% more students understand the concepts better
              </li>

              <li className="task">
                Answered questions on the course discussion board quickly,
                decreasing wait time by 20%
              </li>
            </ul>
          </div>
        </div>

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
                SQL to other interns, reducing their training time by 25%
              </li>
            </ul>
          </div>
        </div>

        {/* TD Work */}
        <div className="container right">
          <div className="event">
            <p className="place">
              <b> L2 IT Analyst at TD&nbsp;Canada&nbsp;Trust </b> <br></br> (May
              2019 - January 2020)
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
        <div className="container left">
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
