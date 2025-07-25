import React, { useState } from 'react';
import CalculatorModal from './CalculatorModal';

const About = () => {
  const [calcOpen, setCalcOpen] = useState(false);
  return (
    <>
      <div style={{display:'flex',alignItems:'center',gap:18,margin:'32px 0 0 0',justifyContent:'center'}}>
        <button
          aria-label="Калькулятор"
          style={{
            background:'none',
            border:'none',
            cursor:'pointer',
            padding:0,
            display:'flex',
            alignItems:'center',
            minWidth:56,
            minHeight:56,
            marginRight:16,
            flexShrink:0
          }}
          onClick={()=>setCalcOpen(true)}
        >
          <img src="/images/5566.svg" alt="Калькулятор" style={{width:56,height:56,display:'block'}} />
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