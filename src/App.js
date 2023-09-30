import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Resume from "./pages/Resume";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

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
