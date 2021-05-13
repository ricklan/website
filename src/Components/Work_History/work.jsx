import './work.css'
import "../../Global/global.css"
import "../../Global/title.css"

export default function Work() {
    return (
        <div>
            <h1 className="title"> Work Experience </h1>

            <div className="timeline">

                <div className="container left">
                    <div className="event">
                        <p className="place"> <b> Web Developer at PSPC </b> <br></br> (May 2021 - January 2022) </p>
                        <ul className="description"></ul>
                    </div>
                </div>

                <div className="container right">
                    <div className="event">
                        <p className="place"> <b> IT Analyst at TD Canada Trust </b> <br></br> (May 2019 - January 2020) </p>
                        <ul className="description">
                            <li className="task"> Provided support for web applications run on Linux servers </li>
                            <li className="task"> Assisted with patching and development </li>
                            <li className="task"> Developed and designed a Python library that automated many time consuming tasks, improving the efficiency of my team by 50% </li>
                            <li className="task"> Took the initative to regularly update my team's documentation, create a Unix training guide and mentor new teammates </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}