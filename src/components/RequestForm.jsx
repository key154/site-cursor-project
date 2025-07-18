import React, { useState } from 'react';
import PolicyModal from './PolicyModal';

const TELEGRAM_BOT_TOKEN = '7956849192:AAF-q5VLu2lB4YgtlgpOLDqkSHZqogWtPpU';
const TELEGRAM_CHAT_ID = '-4839732228';

const RequestForm = () => {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [policyOpen, setPolicyOpen] = useState(false);

  // Валидация телефона: мобильные РФ и короткие городские
  function validatePhone(phone) {
    const digits = phone.replace(/\D/g, '');
    // Мобильные РФ: 10-11 цифр, начинается с 7, 8 или +7
    const isMobile = (
      (digits.length === 11 && (/^7|8/.test(digits) || digits.startsWith('9')))
      || (digits.length === 10 && digits.startsWith('9'))
    );
    // Городские: 5-8 цифр, любые дефисы/пробелы
    const isCity = digits.length >= 5 && digits.length <= 8;
    return isMobile || isCity;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    const form = e.target;
    const name = form[0].value;
    const phone = form[1].value;
    const email = form[2].value;
    const comment = form[3].value;
    if (!validatePhone(phone)) {
      setError('Введите корректный номер телефона (мобильный или городской)');
      setLoading(false);
      return;
    }
    const text = `Заявка с сайта "Ща всё будет":\nИмя: ${name}\nТелефон: ${phone}\nEmail: ${email}\nКомментарий: ${comment}`;
    try {
      const resp = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text,
          parse_mode: 'Markdown',
        }),
      });
      if (resp.ok) {
        setSent(true);
      } else {
        setError('Ошибка отправки. Попробуйте позже.');
      }
    } catch {
      setError('Ошибка отправки. Попробуйте позже.');
    }
    setLoading(false);
  };

  return (
    <section className="request-form" id="request">
      <h2>Оставить заявку</h2>
      {sent ? (
        <div className="form-success">Спасибо! Мы свяжемся с вами в ближайшее время.</div>
      ) : (
        <form onSubmit={handleSubmit}>
          <label style={{textAlign: 'left', fontWeight: 600, marginBottom: 2}}>Ваше имя <span style={{color: '#e11d48'}}>*</span></label>
          <input type="text" placeholder="Ваше имя" required />
          <label style={{textAlign: 'left', fontWeight: 600, marginBottom: 2}}>Телефон <span style={{color: '#e11d48'}}>*</span></label>
          <input type="tel" placeholder="Телефон" required />
          <label style={{textAlign: 'left', fontWeight: 600, marginBottom: 2}}>E-mail</label>
          <input type="email" placeholder="E-mail (необязательно)" />
          <label style={{textAlign: 'left', fontWeight: 600, marginBottom: 2}}>Комментарий</label>
          <textarea placeholder="Комментарий" rows={3} />
          <label className="form-agree" style={{fontWeight: 600}}>
            <input type="checkbox" required /> <span style={{color: '#e11d48'}}>*</span> Я согласен с <a href="#policy" style={{color: '#6366f1', textDecoration: 'underline', cursor: 'pointer'}} onClick={e => {e.preventDefault(); setPolicyOpen(true);}}>политикой обработки данных</a>
          </label>
          <button type="submit" disabled={loading}>{loading ? 'Отправка...' : 'Отправить заявку'}</button>
          {error && <div style={{ color: '#e11d48', marginTop: 10 }}>{error}</div>}
        </form>
      )}
      <PolicyModal open={policyOpen} onClose={() => setPolicyOpen(false)} />
    </section>
  );
};

export default RequestForm; 