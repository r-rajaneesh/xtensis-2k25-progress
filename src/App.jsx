import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Event from './pages/Event';
import Contact from './pages/Contact';
import Organizer from './pages/Organizer';
import Navbar from './components/Navbar';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      {/* <Navbar /> */}
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/event" element={<Event />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/organizer" element={<Organizer />} />
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App
