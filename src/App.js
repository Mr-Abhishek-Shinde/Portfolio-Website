import './App.css';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Resume from "./components/Resume";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

import { AnimatePresence } from "framer-motion";

import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <AnimatePresence exitBeforeEnter>
      <Routes>
        <Route exact path='/' element={<Navbar />} >
          <Route index element={<Home/>} />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/resume' element={<Resume />} />
          <Route exact path='/projects' element={<Projects/>} />
          <Route exact path='/contact' element={<Contact />} />
        </Route>
      </Routes>
      </AnimatePresence>
    </Router>
  );
}

export default App;
