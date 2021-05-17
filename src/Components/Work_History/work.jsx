import "./work.css";
import "../../Global/global.css";
import "../../Global/title.css";

export default function Work() {
  return (
    <div>
      <h1 className="title"> Work Experience & Extracurriculars </h1>

      <div className="timeline">
        {/* PSPC */}
        <div className="container left">
          <div className="event">
            <p className="place">
              <b> Web Developer at PSPC </b> <br></br> (May 2021 - January 2022)
            </p>
            <ul className="description"></ul>
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
                Students who used my notes received a mark 5-10% higher than the
                class average
              </li>

              <li className="task">
                Took the initative to regularly update my team's documentation,
                create a Unix training guide and mentor new teammates
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
                Triaged and resolved complex software issues as well as assist
                with patching and deployment by communicating effectively with
                other teams
              </li>

              <li className="task">
                Saved my team hundreds of hours by designing and developing a
                Python library to automate tedious tasks
              </li>

              <li className="task">
                Took the initiative to update my team’s documentations, create a
                Unix training package and provide training to new team members
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
                Created a static website to publish and distribute my notes for
                various classes at UofT. Friends and colleagues who used my
                website to study noticed a 3-5% increase in their marks.
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
