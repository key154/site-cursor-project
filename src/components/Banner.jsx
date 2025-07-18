import React from 'react';
import bannerBg from '../assets/install.jpg';

const Banner = () => (
  <section
    className="banner"
    style={{
      position: 'relative',
      overflow: 'hidden',
      background: 'linear-gradient(90deg, #22c55e 0%, #4b2996 100%)',
      paddingTop: '64px',
    }}
  >
    <div
      style={{
        position: 'absolute',
        inset: 0,
        zIndex: 0,
        background: 'linear-gradient(90deg, rgba(34,197,94,0.7) 0%, rgba(75,41,150,0.7) 100%)',
      }}
    />
    <img
      src={bannerBg}
      alt="Монтаж вывески"
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        zIndex: 0,
        opacity: 0.32,
        pointerEvents: 'none',
      }}
    />
    <div className="banner-glare" />
    <div className="banner-content" style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 18 }}>
      <div style={{display: 'flex', alignItems: 'center', gap: 18}}>
        <span style={{fontSize: '2.2rem', fontWeight: 700, color: '#fff', textShadow: '0 2px 8px rgba(60,80,180,0.18)'}}>Рекламные вывески</span>
      </div>
      <p className="banner-sub" style={{textAlign: 'center', margin: '18px 0 0 0'}}>
        Производство, монтаж и сервис. Гарантия качества и сроков.
      </p>
      <a
        href="#request"
        className="banner-btn"
        style={{margin: '18px 0 0 0'}}
        onClick={e => {
          e.preventDefault();
          document.getElementById('request')?.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        Оставить заявку
      </a>
      <div className="banner-contacts" style={{marginTop: 18, textAlign: 'center'}}>
        <span>+7 932 744 58 58</span>
        <span>shchavsebydet@yandex.ru</span>
      </div>
    </div>
  </section>
);

export default Banner; 