  import React from 'react';
  import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
  import Navbar from './components/Navbar';
  import Home from './Home';
  import About from './About'; 
  import Skills from './Skills';
  import Projects from './Projects';
  import Experience from './Experience';
  import Contact from './Contact';
  import styles from './App.module.css';

  function App() {
    return (
      <Router>
        <div className={styles.app}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/experience" element={<Experience />} />

          </Routes>
        </div>
      </Router>
    );
  }

  export default App;

