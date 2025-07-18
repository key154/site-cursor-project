import React from 'react';
import logo from '../assets/logo_budet.png';

const Footer = () => (
  <footer className="footer visible" style={{ position: 'relative', overflow: 'hidden' }}>
    <div className="footer-glare" />
    <p style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8}}>
      <img src={logo} alt="Логотип Ща всё будет" style={{height: 28, width: 'auto', borderRadius: 6, marginRight: 6, verticalAlign: 'middle'}} />
      <span className="year">{new Date().getFullYear()}</span> © Ща всё будет. Все права защищены.
    </p>
  </footer>
);

export default Footer; 