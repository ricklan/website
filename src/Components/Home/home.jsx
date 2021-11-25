import "../../Global/global.css";
import "./home.css";

import AboutMe from "../About_Me/aboutMe.jsx";
import Contact from "../Contact/contact.jsx";
import Project from "../Past_Projects/projects.jsx";
import Work from "../Work_History/work.jsx";

export default function Home() {
  return (
    <div>
      <div id="homepage">
        <h1 id="home_title">Welcome to my website</h1>
      </div>
      <AboutMe />
      <Work />
      <Contact />
    </div>
  );
}
