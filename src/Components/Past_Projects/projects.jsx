import "./projects.css";
import "../../Global/global.css";
import "../../Global/title.css";

export default function Project() {
  return (
    <div id="projects">
      <h1 className="title"> Academic Projects </h1>

      <div id="cards">
        <div className="project">
          <div className="project_title">The Cafe</div>
          <div className="project_desc">
            Worked in a team of 3 to design and develop The Cafe, a social media
            app that matches random users and lets them communicate via text,
            audio or video.
            <br></br> <br></br>
            We used React for the frontend, Express.js for the backend, PeerJS
            to faciliate peer to peer communication (text/audio/video) and
            Socket.io for matching users and creating rooms.
            <br></br> <br></br>
            The app was deployed on a DigitalOcean droplet and we containerized
            both the frontend and backend using Docker and used Nginx as a
            reverse proxy.
            <br></br> <br></br>Designed the frontend using React and made API
            calls using Axios and used PeerJS to faciliate peer to peer text,
            audio and video chat.
            <br></br> <br></br>
            <b>Link: </b>
            <a href="https://github.com/ricklan/The-Cafe">The Cafe</a>
          </div>
        </div>

        <div className="project">
          <div className="project_title">SportsCred</div>
          <div className="project_desc">
            Worked in a team of 6 to design and develop SportsCred, a
            Reddit-like social media app, for a client.
            <br></br> <br></br>
            We used Angular for the frontend and Django with a Postgresql
            database for the backend.
            <br></br> <br></br>Implemented a fully functional backend with
            RESTful APIs that made SQL queries to the Postgresql database using
            the Django Models ORM.
            <br></br> <br></br>Assisted with system design by creating ER and
            UML diagrams.
            <br></br> <br></br> Saved our team tens of hours and found dozens of
            bugs by creating unit and regression tests using Pytest.
            <br></br> <br></br>
            The client loved our project and wanted to use our code as the basis
            for their startup.
          </div>
        </div>
      </div>
    </div>
  );
}
