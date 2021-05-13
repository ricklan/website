import './projects.css'
import "../../Global/global.css"
import "../../Global/title.css"


export default function Project() {

    return (
        <div id="projects">

            <h1 className="title"> Past Projects </h1>

            <div id="cards">

                <div className="project">
                    <div className="project_title">The Cafe</div>
                    <div className="project_desc">
                        I worked in a team of 3 to create The Cafe, an Omegle-like application where users connect with each other based on their age, gender, ethnicity and interests. We used React for the frontend, Express.js for the backend, PeerJS to faciliate peer to peer communication (text/audio/video) and Socket.io for matching users and creating rooms.
                        The app was deployed on DigitalOcean and we containerized both the frontend and backend using Docker and used Nginx as a reverse proxy.
                        <br></br>
                        <b>Link:</b> <a href="https://thecafe.ml/">The Cafe</a>
                    </div>
                </div>

                <div className="project">
                    <div className="project_title">SportsCred</div>
                    <div className="project_desc">
                        I worked in a team of 6 to create SportsCred, a Reddit-like social media platform where sports enthusiast can create posts, play sports trivia games, make prediction for the upcoming season and debate with one another, for a client. We used Angular for the frontend and Django as well as a Postgresql database for the backend. The client loved our project and wanted to use our code as the basis for their startup.<br></br>
                        <b>Link:</b> <a href="https://github.com/UTSCCSCC01/project-lilypad">SportsCred</a>
                    </div>
                </div>

                <div className="project">
                    <div className="project_title">Notes Website</div>
                    <div className="project_desc">
                        I created a website to publish my notes for various classes at UofT. The website is written in HTML, JavaScript and CSS and hosted on Github pages. Friends and colleagues who used my website to study noticed a 5-10% increase in their marks. <br></br>
                        <b>Link:</b> <a href="https://rlqyl.github.io/">Notes Website</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
