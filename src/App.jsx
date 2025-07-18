import React from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import About from './components/About';
import Advantages from './components/Advantages';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Reviews from './components/Reviews';
import RequestForm from './components/RequestForm';
import Contacts from './components/Contacts';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import './App.css';

function App() {
  return (
    <div className="main-wrapper">
      <Header />
      <Banner />
      <About />
      <Advantages />
      <Services />
      <Portfolio />
      <Reviews />
      <RequestForm />
      <Contacts />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
