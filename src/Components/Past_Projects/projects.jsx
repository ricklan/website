import "./projects.css";
import "../../Global/global.css";
import "../../Global/title.css";

export default function Project() {
  return (
    <div id="projects">
      <h1 className="title"> Academic & Personal Projects </h1>

      <div id="cards">
        <div className="project">
          <div className="project_title">Konnect</div>
          <div className="project_desc">
            Launched Konnect, a social media app that lets users text, audio and
            video chat with others in a private room.
            <br></br> <br></br>
            Designed the frontend using React and the backend using ExpressJS
            connected to a MongoDB database
            <br></br> <br></br>
            Facilitated peer to peer text, audio and video communication using
            PeerJS and room management using Socket.io
            <br></br> <br></br>Deployed on AWS, using NGINX as a reverse proxy,
            Docker to containerize the frontend and backend, and Redis to cache
            sessions
            <br></br> <br></br>
            <b>Link: </b>
            <a href="https://konnec.me/">Konnect</a>
          </div>
        </div>

        <div className="project">
          <div className="project_title">SportsCred</div>
          <div className="project_desc">
            Developed SportsCred, a Reddit-like social media app, for a client,
            in a team of&nbsp;6<br></br> <br></br>
            Used Angular for the frontend and Django connected to a Postgresql
            database for the backend.
            <br></br> <br></br>Created a fully functional backend with REST APIs
            in Django that made SQL queries to a PostgreSQL database using
            Django Models ORM
            <br></br> <br></br> Implemented unit and regression tests using
            Pytest, catching over 50% more bugs
          </div>
        </div>
      </div>
    </div>
  );
}
