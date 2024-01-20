import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import CourseListing from './components/CourseListing';
import Appbar from './components/AppBar';
import './App.css';

export default function App() {
  return (
    <div>
      <Router>
      <Appbar/>
        <Routes>
          <Route path="/" element={<CourseListing />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </div>
  );
}

