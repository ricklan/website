import { Route, Switch } from "react-router-dom";
import './App.css';
import Home from './Components/Home/home.jsx'
import Project from './Components/Past_Projects/projects.jsx'
import Work from './Components/Work_History/work.jsx'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/website/" component={Home} />
        <Route exact path="/website/project/" component={Project} />
        <Route exact path="/website/work/" component={Work} />
      </Switch>
    </div >
  );
}

export default App;
