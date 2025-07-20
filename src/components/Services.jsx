import React from 'react';

const services = [
  {
    icon: (
      // Неоновая лампа
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="#22c55e" strokeWidth="2"/><rect x="9" y="6" width="6" height="12" rx="3" stroke="#4b2996" strokeWidth="2"/><circle cx="12" cy="12" r="2" fill="#4b2996"/></svg>
    ),
    title: 'Изготовление вывесок',
    desc: 'Световые и несветовые, любых форм и размеров',
  },
  {
    icon: (
      // Крепёж/инструмент
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none"><rect x="4" y="15" width="16" height="4" rx="2" stroke="#4b2996" strokeWidth="2"/><path d="M8 15V7a4 4 0 1 1 8 0v8" stroke="#22c55e" strokeWidth="2"/></svg>
    ),
    title: 'Монтаж и демонтаж',
    desc: 'Профессиональная установка и снятие конструкций',
  },
  {
    icon: (
      // Карандаш и линейка
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none"><rect x="3" y="15" width="18" height="4" rx="2" stroke="#22c55e" strokeWidth="2"/><path d="M7 15V5l5 3 5-3v10" stroke="#4b2996" strokeWidth="2"/></svg>
    ),
    title: 'Дизайн и проектирование',
    desc: 'Разработка креативных и эффективных решений',
  },
  {
    icon: (
      // Гаечный ключ
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none"><path d="M21 7a4 4 0 0 1-5.66 3.66l-6.7 6.7a2 2 0 1 1-2.83-2.83l6.7-6.7A4 4 0 1 1 21 7z" stroke="#4b2996" strokeWidth="2"/><circle cx="7" cy="17" r="2" stroke="#22c55e" strokeWidth="2"/></svg>
    ),
    title: 'Сервис и ремонт',
    desc: 'Обслуживание и восстановление вывесок',
  },
];

const Services = () => (
  <section className="services" id="services">
    <h2>Наши услуги</h2>
    <div className="services-grid">
      {services.map((s, i) => (
        <div className="service-card" key={i}>
          <div className="service-icon">{s.icon}</div>
          <div className="service-title">{s.title}</div>
          <div className="service-desc">{s.desc}</div>
        </div>
      ))}
    </div>
  </section>
);

export default Services; 