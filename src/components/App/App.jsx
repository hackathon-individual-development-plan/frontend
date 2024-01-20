import React from 'react';
import './App.css';
import BriefInfoCard from '../BriefInfoCard/BriefInfoCard.jsx';
import Header from '../Header/Header.jsx';
import PathToPage from '../PathToPage/PathToPage.jsx';
import Menu from '../Menu/Menu.jsx';
import Footer from '../Footer/Footer.jsx';

function App() {
  return (
    <div className="page">
      <Header />
      <PathToPage />
      <Menu />
      <BriefInfoCard />
      <Footer />
    </div>
  );
}

export default App;
