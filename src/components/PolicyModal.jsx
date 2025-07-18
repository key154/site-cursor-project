import React from 'react';
import PropTypes from 'prop-types';

const policyText = (
  <div style={{fontSize: '1rem', color: '#23272f', paddingRight: 36}}>
    <h2 style={{marginTop: 0, fontSize: '1.18rem'}}>Политика обработки персональных данных</h2>
    <p>
      Настоящая политика определяет порядок обработки и защиты персональных данных, предоставляемых пользователями сайта &quot;Ща всё будет&quot; (далее — Сайт).
    </p>
    <h3 style={{fontSize: '1.08rem'}}>1. Общие положения</h3>
    <p>
      1.1. Оставляя заявку на Сайте, пользователь соглашается с настоящей политикой.<br/>
      1.2. Оператор не распространяет и не передаёт персональные данные третьим лицам, за исключением случаев, предусмотренных законодательством РФ.
    </p>
    <h3 style={{fontSize: '1.08rem'}}>2. Какие данные обрабатываются</h3>
    <ul>
      <li>Имя</li>
      <li>Телефон</li>
      <li>Email (если указан)</li>
      <li>Комментарий</li>
    </ul>
    <h3 style={{fontSize: '1.08rem'}}>3. Цели обработки</h3>
    <ul>
      <li>Обработка заявок и обратной связи</li>
      <li>Консультация по услугам</li>
      <li>Выполнение обязательств перед пользователем</li>
    </ul>
    <h3 style={{fontSize: '1.08rem'}}>4. Защита данных</h3>
    <p>
      4.1. Оператор принимает необходимые организационные и технические меры для защиты персональных данных.<br/>
      4.2. Данные хранятся только для целей, указанных выше.
    </p>
    <h3 style={{fontSize: '1.08rem'}}>5. Права пользователя</h3>
    <ul>
      <li>Уточнить, изменить или удалить свои данные, отправив запрос на e-mail: shchavsebydet@yandex.ru</li>
      <li>Отозвать согласие на обработку данных</li>
    </ul>
    <p style={{marginTop: 18, fontSize: '0.93rem', color: '#6366f1'}}>Дата публикации: 2024</p>
  </div>
);

const PolicyModal = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <div
      className="policy-modal-overlay"
      style={{
        position: 'fixed',
        left: 0,
        top: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 2000,
        background: 'rgba(30,32,38,0.65)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        animation: 'fadeIn 0.18s',
      }}
      onClick={e => { if (e.target.className === 'policy-modal-overlay') onClose(); }}
    >
      <div
        className="policy-popup"
        style={{
          background: '#fff',
          borderRadius: 18,
          boxShadow: '0 8px 32px rgba(60,80,180,0.18)',
          border: '2px solid #6366f1',
          padding: 28,
          maxWidth: 600,
          width: '96vw',
          position: 'relative',
          animation: 'policyPopupIn 0.25s',
          maxHeight: '90vh',
          overflowY: 'auto',
        }}
      >
        <button
          className="modal-gallery-close"
          onClick={onClose}
          aria-label="Закрыть"
          style={{position: 'absolute', top: 16, right: 16, zIndex: 2}}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" stroke="#fff" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"><line x1="6" y1="6" x2="18" y2="18"/><line x1="18" y1="6" x2="6" y2="18"/></svg>
        </button>
        {policyText}
      </div>
      <style>{`
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes policyPopupIn { from { opacity: 0; transform: translateY(20px) scale(0.98); } to { opacity: 1; transform: none; } }
      `}</style>
    </div>
  );
};

PolicyModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default PolicyModal; 