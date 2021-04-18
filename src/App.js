import AboutMe from './Components/About_Me/aboutMe.jsx'
import Contact from './Components/Contact/contact.jsx'
import Home from './Components/Home/home.jsx'
import Project from './Components/Past_Projects/projects.jsx'
import Work from './Components/Work_History/work.jsx'

function App() {
  return (
    <div className="App">
      <Home />
      <AboutMe />
      <Project />
      <Work />
      <Contact />
    </div >
  );
}

export default App;
