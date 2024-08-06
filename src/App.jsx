import React from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import All from './ALL';
import FullStackDevelopment from './FullStackDevelopment';
import DataScience from './DataScience';
import CyberSecurity from './CyberSecurity';
import Career from './Career';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <NavLink className="navbar-brand" to="/">Courses</NavLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/" exact>All</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/full-stack-development">Full Stack Development</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/data-science">Data Science</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/cyber-security">Cyber Security</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/career">Career</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<All />} />
          <Route path="/full-stack-development" element={<FullStackDevelopment />} />
          <Route path="/data-science" element={<DataScience />} />
          <Route path="/cyber-security" element={<CyberSecurity />} />
          <Route path="/career" element={<Career />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
