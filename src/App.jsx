import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import Navbar from './Components/Navbar/Navbar';
import Register from './Pages/Register/Register';
import Dashboard from './Pages/Dashboard/Dashboard';

// page-level components
import AboutPage from './Pages/AboutPage/AboutPage';
import ContactPage from './Pages/ContactPage/ContactPage';
import TestimonialPage from './Pages/TestimonialPage/TestimonialPage';

import { Nexora } from './Components/Nexora/Nexora';
import About from './Components/About/About';
import Feedback from './Components/Feedback/Feedback';
import Footer from './Components/Footer/Footer';

const Home = () => (
  <main>
    <Nexora />
    <About />
    <Feedback />
    <Footer />
  </main>
);

// Wrapper component to conditionally render Navbar
const Layout = ({ children }) => {
  const location = useLocation();
  const hideNavbarRoutes = ['/dashboard'];

  return (
    <>
      {!hideNavbarRoutes.includes(location.pathname) && <Navbar />}
      {children}
    </>
  );
};

const App = () => (
  <Router>
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/testimonials" element={<TestimonialPage />} />
      </Routes>
    </Layout>
  </Router>
);

export default App;