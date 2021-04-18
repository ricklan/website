import './App.css';
import Contact from './Components/Contact/contact.jsx'
import Header from './Components/Header_Bar/header.jsx'
import Home from './Components/Home/home.jsx'
import Project from './Components/Past_Projects/projects.jsx'
import Work from './Components/Work_History/work.jsx'

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Project />
      <Work />
      <Contact />
    </div >
  );
}

export default App;
