import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Navbar from './componets/navbar'; 
import Login from './componets/login'; 
import Product from './componets/product'; 
import Register from './componets/register';
import Order from './product/order';


const NavbarWrapper = ({ children }) => {
  const location = useLocation();
  const isNavbarVisible = location.pathname !== '/product';

  return (
    <>
      {isNavbarVisible && <Navbar />}
      {children}
    </>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<NavbarWrapper><Login /></NavbarWrapper>} />
        <Route path="/register" element={<NavbarWrapper><Register /></NavbarWrapper>} />
        <Route path="/product" element={<NavbarWrapper><Product /></NavbarWrapper>} />
        <Route path="/login" element={<NavbarWrapper><Login /></NavbarWrapper>} />
        <Route path="/order" element={<Order />} />
      </Routes>
    </Router>
  );
}

export default App;
