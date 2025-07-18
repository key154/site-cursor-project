import React, { useState } from 'react';
import ModalGallery from './ModalGallery';

const works = [
  {
    title: 'Световые буквы',
    images: [
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80',
    ],
  },
  {
    title: 'Неоновая вывеска для кафе',
    images: [
      'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=800&q=80',
    ],
  },
  {
    title: 'Оформление фасада',
    images: [
      'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
    ],
  },
  {
    title: 'Вывеска для офиса',
    images: [
      'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=800&q=80',
    ],
  },
  {
    title: 'Рекламный лайтбокс',
    images: [
      'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=80',
    ],
  },
  {
    title: 'Объемные буквы для ТРЦ',
    images: [
      'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80',
    ],
  },
];

const Portfolio = () => {
  const [modal, setModal] = useState({ open: false, work: null });

  const handleOpen = (work) => setModal({ open: true, work });
  const handleClose = () => setModal({ open: false, work: null });

  return (
    <section className="portfolio">
      <h2>Примеры наших работ</h2>
      <div className="portfolio-gallery">
        {works.map((w, i) => (
          <div
            className="portfolio-item"
            key={i}
            tabIndex={0}
            role="button"
            onClick={() => handleOpen(w)}
            onKeyPress={e => (e.key === 'Enter' || e.key === ' ') && handleOpen(w)}
            style={{ cursor: 'pointer' }}
          >
            <img src={w.images[0]} alt={w.title} />
            <div className="portfolio-item-title">{w.title}</div>
          </div>
        ))}
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