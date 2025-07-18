import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

function animateOnScroll() {
  const reveal = () => {
    document.querySelectorAll('section, .footer').forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 60) {
        el.classList.add('visible');
      }
    });
  };
  window.addEventListener('scroll', reveal);
  reveal();
}

animateOnScroll();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
