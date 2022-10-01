import './App.css';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

import React from "react";
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/home' element={<Home/>} />
        {/* <Route path='/about' element={<About/>} /> */}
        {/* <Route path='/projects' element={<Projects/>} /> */}
        {/* <Route path='/contact' element={<Contact/>} /> */}
      </Switch>
    </Router>
  );
}

export default App;
