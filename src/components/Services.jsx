import React from 'react';

const services = [
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none"><rect x="3" y="7" width="18" height="10" rx="3" stroke="#22c55e" strokeWidth="2"/><path d="M7 7V5a5 5 0 0 1 10 0v2" stroke="#4b2996" strokeWidth="2"/></svg>
    ),
    title: 'Изготовление вывесок',
    desc: 'Световые и несветовые, любых форм и размеров',
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none"><path d="M4 20v-2a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v2" stroke="#4b2996" strokeWidth="2"/><circle cx="12" cy="7" r="4" stroke="#22c55e" strokeWidth="2"/></svg>
    ),
    title: 'Монтаж и демонтаж',
    desc: 'Профессиональная установка и снятие конструкций',
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none"><path d="M3 17v-2a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v2" stroke="#22c55e" strokeWidth="2"/><rect x="7" y="3" width="10" height="6" rx="2" stroke="#4b2996" strokeWidth="2"/></svg>
    ),
    title: 'Дизайн и проектирование',
    desc: 'Разработка креативных и эффективных решений',
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="#4b2996" strokeWidth="2"/><path d="M8 12l2 2 4-4" stroke="#22c55e" strokeWidth="2"/></svg>
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