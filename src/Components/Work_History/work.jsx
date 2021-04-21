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
                        <p className="place">Public Services and Procurement Canada </p>
                        <p className="time">Web Developer (May 2021 - January 2022)</p>
                        <p className="description"></p>
                    </div>
                </div>

                <div className="container right">
                    <div className="event">
                        <p className="place">TD Canada Trust </p>
                        <p className="time">IT Analyst (May 2019 - January 2020)</p>
                        <p className="description">
                            I provided support for dozens of web applications ran on Linux servers, assisted with patching and deployment activities and developed and designed a Python library that automated many time consuming tasks, improving the efficiency of my team by 50%. I also took the initative to regularly update my team's documentation, create a Unix training guide and mentor new teammates.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}