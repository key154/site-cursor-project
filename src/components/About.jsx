import React, { useState } from 'react';
import CalculatorModal from './CalculatorModal';

const About = () => {
  const [calcOpen, setCalcOpen] = useState(false);
  return (
    <>
      <div style={{display:'flex',alignItems:'center',gap:18,margin:'32px 0 0 0',justifyContent:'center'}}>
        <button
          aria-label="Калькулятор"
          style={{background:'none',border:'none',cursor:'pointer',padding:0,display:'flex',alignItems:'center'}}
          onClick={()=>setCalcOpen(true)}
        >
          {/* SVG 3D калькулятор */}
          <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="calcBody" x1="6" y1="6" x2="50" y2="50" gradientUnits="userSpaceOnUse">
                <stop stopColor="#f3f6fd"/>
                <stop offset="1" stopColor="#d1d5db"/>
              </linearGradient>
              <linearGradient id="calcBtn" x1="0" y1="0" x2="1" y2="1">
                <stop stopColor="#7c82f1"/>
                <stop offset="1" stopColor="#6366f1"/>
              </linearGradient>
              <radialGradient id="calcShadow" cx="0.5" cy="0.7" r="0.7">
                <stop stopColor="#6366f1" stopOpacity="0.18"/>
                <stop offset="1" stopColor="#6366f1" stopOpacity="0"/>
              </radialGradient>
            </defs>
            <rect x="6" y="6" width="44" height="44" rx="10" fill="url(#calcBody)" stroke="#6366f1" strokeWidth="3"/>
            <ellipse cx="28" cy="50" rx="18" ry="4" fill="url(#calcShadow)" />
            <rect x="14" y="12" width="28" height="10" rx="2.5" fill="#e0e7ef" stroke="#6366f1" strokeWidth="2"/>
            {/* 4 ряда по 3 кнопки */}
            <rect x="16" y="26" width="6" height="6" rx="2" fill="url(#calcBtn)" stroke="#4b2996" strokeWidth="1"/>
            <rect x="24" y="26" width="6" height="6" rx="2" fill="url(#calcBtn)" stroke="#4b2996" strokeWidth="1"/>
            <rect x="32" y="26" width="6" height="6" rx="2" fill="url(#calcBtn)" stroke="#4b2996" strokeWidth="1"/>
            <rect x="16" y="32" width="6" height="6" rx="2" fill="url(#calcBtn)" stroke="#4b2996" strokeWidth="1"/>
            <rect x="24" y="32" width="6" height="6" rx="2" fill="url(#calcBtn)" stroke="#4b2996" strokeWidth="1"/>
            <rect x="32" y="32" width="6" height="6" rx="2" fill="url(#calcBtn)" stroke="#4b2996" strokeWidth="1"/>
            <rect x="16" y="38" width="6" height="6" rx="2" fill="url(#calcBtn)" stroke="#4b2996" strokeWidth="1"/>
            <rect x="24" y="38" width="6" height="6" rx="2" fill="url(#calcBtn)" stroke="#4b2996" strokeWidth="1"/>
            <rect x="32" y="38" width="6" height="6" rx="2" fill="url(#calcBtn)" stroke="#4b2996" strokeWidth="1"/>
            <rect x="16" y="44" width="6" height="6" rx="2" fill="url(#calcBtn)" stroke="#4b2996" strokeWidth="1"/>
            <rect x="24" y="44" width="6" height="6" rx="2" fill="url(#calcBtn)" stroke="#4b2996" strokeWidth="1"/>
            <rect x="32" y="44" width="6" height="6" rx="2" fill="url(#calcBtn)" stroke="#4b2996" strokeWidth="1"/>
            <rect x="24" y="20" width="12" height="3" rx="1.2" fill="#6366f1" opacity="0.5"/>
          </svg>
        </button>
        <span style={{fontSize:'1.18rem',color:'#23272f',fontWeight:600, maxWidth: 340}}>
          Вы можете самостоятельно рассчитать стоимость вывески в нашем калькуляторе.
        </span>
        {calcOpen && <CalculatorModal open={calcOpen} onClose={()=>setCalcOpen(false)} />}
      </div>
      <section className="about" id="about">
        <h2>О компании</h2>
        <p>
          Мы специализируемся на проектировании, изготовлении и монтаже современных рекламных вывесок и световых конструкций для бизнеса. Предлагаем полный цикл работ — от идеи и дизайна до установки и сервисного обслуживания. Гарантируем качество, индивидуальный подход и соблюдение сроков.
        </p>
      </section>
    </>
  );
};

export default About; 