import React, { useState } from 'react';
import logo from '../assets/logo_budet.png';
// import CalculatorModal from './CalculatorModal';

const nav = [
  { label: 'О компании', href: '#about' },
  { label: 'Услуги', href: '#services' },
  { label: 'Портфолио', href: '#portfolio' },
  { label: 'Отзывы', href: '#reviews' },
  { label: 'Контакты', href: '#contacts' },
  { label: 'Оставить заявку', href: '#request', accent: true },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  // const [calcOpen, setCalcOpen] = useState(false);
  const handleNav = (btn, e) => {
    const el = document.querySelector(btn.href);
    if (el) {
      e.preventDefault();
      el.scrollIntoView({ behavior: 'smooth' });
      setOpen(false);
    }
  };
  return (
    <header className="site-header">
      <div className="header-inner">
        <a href="#" className="header-logo" style={{display: 'flex', alignItems: 'center', gap: 0, textDecoration: 'none'}}>
          <img src={logo} alt="Логотип" style={{height: 54, width: 'auto'}} />
        </a>
        <nav className="header-nav">
          {nav.map(btn => (
            <a
              key={btn.href}
              href={btn.href}
              className={btn.accent ? 'header-btn-accent' : 'header-btn'}
              style={btn.accent ? {marginLeft: 18} : {}}
              onClick={e => handleNav(btn, e)}
            >
              {btn.label}
            </a>
          ))}
          {/* Калькулятор удалён */}
        </nav>
        <button className="burger-btn" aria-label="Меню" onClick={() => setOpen(o => !o)}>
          <span className={open ? 'burger-line open' : 'burger-line'} />
          <span className={open ? 'burger-line open' : 'burger-line'} />
          <span className={open ? 'burger-line open' : 'burger-line'} />
        </button>
        {open && (
          <div className="burger-menu">
            {nav.map(btn => (
              <a
                key={btn.href}
                href={btn.href}
                className={btn.accent ? 'header-btn-accent' : 'header-btn'}
                style={{display: 'block', margin: '10px 0'}}
                onClick={e => handleNav(btn, e)}
              >
                {btn.label}
              </a>
            ))}
            {/* Калькулятор удалён */}
          </div>
        )}
        {/* {calcOpen && <CalculatorModal open={calcOpen} onClose={()=>setCalcOpen(false)} />} */}
      </div>
    </header>
  );
};

export default Header; 