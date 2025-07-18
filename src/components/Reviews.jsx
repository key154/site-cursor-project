import React from 'react';

const reviews = [
  {
    name: 'Евгений Анокин',
    text: 'Сделали вывеску быстро и качественно. Рекомендую!'
  },
  {
    name: 'Татьяна Петрова',
    text: 'Работаем с этой фирмой давно. Всегда довольны результатом.'
  },
  {
    name: 'Иван Миронов',
    text: 'Отличный сервис и поддержка. Спасибо!'
  }
];

const Reviews = () => (
  <section className="reviews">
    <h2>Отзывы клиентов</h2>
    <div className="reviews-list">
      {reviews.map((r, i) => (
        <div className="review" key={i}>
          <div className="review-text">{r.text}</div>
          <div className="review-name">{r.name}</div>
        </div>
      ))}
    </div>
  </section>
);

export default Reviews; 