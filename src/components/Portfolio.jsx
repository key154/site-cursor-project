import React, { useState, useEffect, useRef } from 'react';
import ModalGallery from './ModalGallery';

const works = [
  {
    title: 'Световые буквы',
    images: [
      '/images/portfolio1.jpg', // инженерно-технический центр
      '/images/portfolio2.jpg', // big start
      '/images/portfolio3.jpg', // vip авто
      '/images/portfolio4.jpg', // дуть
    ],
  },
  {
    title: 'Световые короба',
    images: [
      '/images/portfolio6.jpg', // шаурма
      '/images/portfolio5.jpg', // поликлиника
      '/images/portfolio7.jpg', // хлеб и эклер
    ],
  },
  {
    title: 'Оформление сцен',
    images: [
      '/images/portfolio16.jpg', // синяя сцена
      '/images/portfolio17.jpg', // уральские локомотивы
    ],
  },
  {
    title: 'Вывеска для офиса',
    images: [
      '/images/portfolio8.jpg', // Helix
      '/images/portfolio9.jpg', // Нет долгов
      '/images/portfolio10.jpg', // Ключ к речи
      '/images/portfolio11.jpg', // Teplodina
    ],
  },
  {
    title: 'Рекламный лайтбокс',
    images: [
      '/images/portfolio12.jpg',
      '/images/portfolio13.jpg',
      '/images/portfolio14.jpg',
      '/images/portfolio15.jpg',
    ],
  },
  {
    title: 'Монтаж вывесок для ПВЗ',
    images: [
      '/images/portfolio22.jpg',
      '/images/portfolio23.jpg',
      '/images/portfolio24.jpg',
    ],
  },
  {
    title: 'Монтаж Баннеров',
    images: [
      '/images/portfolio18.jpg',
      '/images/portfolio19.jpg',
      '/images/portfolio20.jpg',
      '/images/portfolio21.jpg',
    ],
  },
];

const AUTO_SLIDE_INTERVAL = 3500;

const Portfolio = () => {
  const [modal, setModal] = useState({ open: false, work: null });
  const [index, setIndex] = useState(0);
  const [hover, setHover] = useState(false);
  const autoSlide = useRef();

  const handleOpen = (work) => setModal({ open: true, work });
  const handleClose = () => setModal({ open: false, work: null });

  const prev = () => setIndex(i => (i - 1 + works.length) % works.length);
  const next = () => setIndex(i => (i + 1) % works.length);

  // Для отображения 3 работ: центральная, левая, правая
  const getSlide = (offset) => works[(index + offset + works.length) % works.length];

  // Автопрокрутка
  useEffect(() => {
    if (!hover) {
      autoSlide.current = setTimeout(() => setIndex(i => (i + 1) % works.length), AUTO_SLIDE_INTERVAL);
    }
    return () => clearTimeout(autoSlide.current);
  }, [index, hover]);

  return (
    <section className="portfolio" id="portfolio">
      <h2>Примеры наших работ</h2>
      <div
        className="portfolio-carousel modern-carousel"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <button className="carousel-arrow" onClick={prev} aria-label="Назад">
          <svg width="28" height="28" viewBox="0 0 24 24" stroke="#fff" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
        </button>
        <div className="carousel-track">
          {/* Левая */}
          <div className="carousel-slide side-slide left-slide fade-slide" style={{transform: 'scale(0.85) rotateY(18deg)', opacity: 0.55}} onClick={prev}>
            <img src={getSlide(-1).images[0]} alt={getSlide(-1).title} className="portfolio-carousel-img" />
            <div className="portfolio-item-title">{getSlide(-1).title}</div>
          </div>
          {/* Центральная */}
          <div className="carousel-slide center-slide fade-slide" style={{transform: 'scale(1.12) rotateY(0deg)', opacity: 1, boxShadow: '0 4px 24px rgba(60,80,180,0.13)'}} tabIndex={0} role="button" onClick={() => handleOpen(getSlide(0))}>
            <img src={getSlide(0).images[0]} alt={getSlide(0).title} className="portfolio-carousel-img" />
            <div className="portfolio-item-title">{getSlide(0).title}</div>
          </div>
          {/* Правая */}
          <div className="carousel-slide side-slide right-slide fade-slide" style={{transform: 'scale(0.85) rotateY(-18deg)', opacity: 0.55}} onClick={next}>
            <img src={getSlide(1).images[0]} alt={getSlide(1).title} className="portfolio-carousel-img" />
            <div className="portfolio-item-title">{getSlide(1).title}</div>
          </div>
        </div>
        <button className="carousel-arrow" onClick={next} aria-label="Вперёд">
          <svg width="28" height="28" viewBox="0 0 24 24" stroke="#fff" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 6 15 12 9 18"/></svg>
        </button>
      </div>
      <div className="carousel-dots">
        {works.map((_, i) => (
          <span
            key={i}
            className={i === index ? 'carousel-dot active' : 'carousel-dot'}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
      <div style={{marginTop: 18, fontSize: '1.13rem', color: '#6366f1', fontWeight: 600, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8}}>
        <a href="https://t.me/shavsebudet_ekb" target="_blank" rel="noopener noreferrer" style={{display: 'flex', alignItems: 'center', gap: 8, color: '#229ED9', textDecoration: 'none', fontWeight: 700}}>
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="12" fill="#229ED9"/><path d="M17.5 7.5L15.5 17.5C15.5 17.5 15.25 18 14.75 18C14.5 18 14.25 17.75 14 17.5L11.5 15.5L10.5 16.5C10.5 16.5 10.5 16.5 10.25 16.5C10 16.5 10 16.25 10 16.25L9.5 13.5L15.25 8.75C15.5 8.5 15.25 8.5 15 8.75L8.5 13L6 12.25C6 12.25 5.5 12 5.5 11.5C5.5 11 6 10.75 6 10.75L16.5 7.25C16.5 7.25 17.5 7 17.5 7.5Z" fill="#fff"/></svg>
          <span>Больше наших работ в Telegram</span>
        </a>
      </div>
      {modal.open && (
        <ModalGallery
          images={modal.work.images}
          title={modal.work.title}
          onClose={handleClose}
        />
      )}
    </section>
  );
};

export default Portfolio; 