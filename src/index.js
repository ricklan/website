import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from './App';
import Project from './Components/Past_Projects/projects.jsx'
import Work from './Components/Work_History/work.jsx'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route exact path="https://ricklan.github.io/website/" component={App} />
        <Route exact path="https://ricklan.github.io/website/Project/" component={Project} />
        <Route exact path="https://ricklan.github.io/website/Work/" component={Work} />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

