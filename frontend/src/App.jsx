import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './home/Home';
import Courses from './courses/Courses.jsx';
import Signup from './components/Signup.jsx';
import Contact from './components/Contact.jsx';
import About from './components/About.jsx';

function App() {
  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/course" element={<Courses />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
