import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './Layout.css'

const Layout = () => {
  return (
    <div className="app-container">
      <header><Header /></header>
      <main>
        <Outlet />
      </main>
      <footer><Footer /></footer>
    </div>
  );
};

export default Layout;
