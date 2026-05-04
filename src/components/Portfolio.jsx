import React, { useState } from 'react';
import ModalGallery from './ModalGallery';

const services = [
  {
    title: 'Наружные вывески (уличные)',
    image: '/images/portfolio1.jpg',
    description: 'Изготовление уличных вывесок с уникальным дизайном.',
    images: [
      '/images/portfolio1.jpg',
      '/images/portfolio2.jpg',
      '/images/portfolio3.jpg',
      '/images/portfolio4.jpg',
    ],
  },
  {
    title: 'Интерьерные вывески',
    image: '/images/portfolio8.jpg',
    description: 'Оформление под стиль вашего заведения. Изготовление под заказ из оргстекла, пластика и нержавейки.',
    images: [
      '/images/portfolio8.jpg',
      '/images/portfolio9.jpg',
      '/images/portfolio10.jpg',
      '/images/portfolio11.jpg',
    ],
  },
  {
    title: 'Изготовление объемных букв',
    image: '/images/portfolio12.jpg',
    description: 'Изготовление световой вывески из букв, а также несветовые, с подсветкой на заказ.',
    images: [
      '/images/portfolio12.jpg',
      '/images/portfolio13.jpg',
      '/images/portfolio14.jpg',
      '/images/portfolio15.jpg',
    ],
  },
  {
    title: 'Световые короба',
    image: '/images/portfolio6.jpg',
    description: 'Изготовление световых коробов под заказ любых видов.',
    images: [
      '/images/portfolio6.jpg',
      '/images/portfolio5.jpg',
      '/images/portfolio7.jpg',
    ],
  },
  {
    title: 'Рекламные стеллы',
    image: '/images/portfolio18.jpg',
    description: 'Изготовление рекламных стелл различной формы под заказ.',
    images: [
      '/images/portfolio18.jpg',
      '/images/portfolio19.jpg',
      '/images/portfolio20.jpg',
      '/images/portfolio21.jpg',
    ],
  },
  {
    title: 'Световые вывески',
    image: '/images/portfolio22.jpg',
    description: 'Для привлечения потенциальных клиентов',
    images: [
      '/images/portfolio22.jpg',
      '/images/portfolio23.jpg',
      '/images/portfolio24.jpg',
    ],
  },
];

const Portfolio = () => {
  const [modal, setModal] = useState({ open: false, work: null });

  const handleOpen = (work) => setModal({ open: true, work });
  const handleClose = () => setModal({ open: false, work: null });

  return (
    <section className="portfolio" id="portfolio">
      <h2>Наши услуги</h2>
      <div className="portfolio-gallery">
        {services.map((service, i) => (
          <div className="portfolio-item" key={i} onClick={() => handleOpen(service)}>
            <img src={service.image} alt={service.title} />
            <div className="portfolio-item-content">
              <div className="portfolio-item-title">{service.title}</div>
              <div className="portfolio-item-description">{service.description}</div>
            </div>
          </div>
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