import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header.jsx';
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs.jsx';
import Footer from '../Footer/Footer.jsx';
import './Layout.css';

export default function Layout() {
  return (
    <>
      <Header />
      <Breadcrumbs />
      <main className='main'>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
