import React from 'react';

const items = [
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="url(#g1)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <defs>
          <linearGradient id="g1" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
            <stop stopColor="#3b82f6"/>
            <stop offset="1" stopColor="#22c55e"/>
          </linearGradient>
        </defs>
        <circle cx="12" cy="12" r="10" stroke="url(#g1)" strokeWidth="2" fill="none"/>
        <path d="M12 6v6l4 2" stroke="url(#g1)"/>
      </svg>
    ),
    title: 'Сроки',
    desc: 'Выполняем заказы точно в срок',
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="url(#g2)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <defs>
          <linearGradient id="g2" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
            <stop stopColor="#6366f1"/>
            <stop offset="1" stopColor="#3b82f6"/>
          </linearGradient>
        </defs>
        <path d="M12 17.75L6.16 21l1.12-6.54L2 9.24l6.58-.96L12 2.5l3.42 5.78 6.58.96-4.76 5.22 1.12 6.54z" stroke="url(#g2)" fill="none"/>
      </svg>
    ),
    title: 'Качество',
    desc: 'Гарантия на все изделия',
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="url(#g3)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <defs>
          <linearGradient id="g3" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
            <stop stopColor="#22c55e"/>
            <stop offset="1" stopColor="#6366f1"/>
          </linearGradient>
        </defs>
        <path d="M12 2v7h7" stroke="url(#g3)"/>
        <path d="M21 12c0 5-4 9-9 9s-9-4-9-9 4-9 9-9" stroke="url(#g3)"/>
      </svg>
    ),
    title: 'Креатив',
    desc: 'Дизайн, который выделяет',
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="url(#g4)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <defs>
          <linearGradient id="g4" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
            <stop stopColor="#3b82f6"/>
            <stop offset="1" stopColor="#22c55e"/>
          </linearGradient>
        </defs>
        <rect x="2" y="7" width="20" height="14" rx="4" stroke="url(#g4)"/>
        <path d="M16 3v4M8 3v4" stroke="url(#g4)"/>
      </svg>
    ),
    title: 'Цена',
    desc: 'Честные и прозрачные цены',
  },
];

const Advantages = () => (
  <section className="advantages">
    <h2>Почему выбирают нас</h2>
    <div className="advantages-list">
      {items.map((item, i) => (
        <div className="advantage" key={i}>
          <div className="advantage-icon">{item.icon}</div>
          <div className="advantage-title">{item.title}</div>
          <div className="advantage-desc">{item.desc}</div>
        </div>
      ))}
    </div>
  </section>
);

export default Advantages; 