import React from 'react';
import './App.css';
import { HashRouter as Router, Route } from "react-router-dom";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Portfolio from "./Pages/Portfolio"
import Resume from "./Pages/Resume";


function App() {
  return (

    <Router>
      <div>
          <Route exact path="/" component={About} />
          <Route exact path="/About" component={About} />
          <Route exact path="/Portfolio" component={Portfolio} />
          <Route exact path="/Resume" component={Resume} />
          <Route exact path="/Contact" component={Contact} />
        {/* </Switch> */}
      </div>
    </Router>
    
   
   
  );
}

export default App;
