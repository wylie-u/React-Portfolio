import React from 'react';
import './App.css';
import ProjectContainer from './components/ProjectContainer';
// import About from "./Pages/About";
// import Contact from "./Pages/Contact";
import Nav from './components/Nav';
import Footer from "./components/Footer";



function App() {
  return (
    <div>
      <Nav/>
    <ProjectContainer/>  
    <Footer/>  
    </div>
  );
}

export default App;
