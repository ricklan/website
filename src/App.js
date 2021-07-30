import React from "react";
import { BrowserRouter as Switch, Route } from "react-router-dom";
import Home from "./Components/Home/home.jsx";

function App() {
  return (
    <div className="App">
      <Switch>
        {/*  route definitions */}
        <Route exact={true} path="/website">
          <Home></Home>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
