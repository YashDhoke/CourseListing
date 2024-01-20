import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import CourseListing from './components/CourseListing';
import './App.css';

export default function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/course-listing" element={<CourseListing />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </div>
  );
}

const Home = () => (
  <div>
    <h2>Welcome to the Home Page</h2>
  </div>
);
