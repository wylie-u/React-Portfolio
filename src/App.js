import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Portfolio from "./Pages/Portfolio"
import Resume from "./Pages/Resume";




function App() {
  return (

    <Router>
      <div>
        <Switch>
          <Route exact path={["/", "/About"]}>
            <About />
          </Route>
          <Route path="/Portfolio">
            <Portfolio />
          </Route>
          <Route path="/Resume">
            <Resume />
          </Route>
          <Route path="/Contact">
            <Contact />
          </Route>
        </Switch>
      </div>
    </Router>
    
   
   
  );
}

export default App;
