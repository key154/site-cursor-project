import React, { useEffect, useRef, useState } from 'react';

const AUTO_SLIDE_INTERVAL = 3000;

const ModalGallery = ({ images, title, onClose }) => {
  const [index, setIndex] = useState(0);
  const [auto, setAuto] = useState(true);
  const overlayRef = useRef(null);
  const timer = useRef();

  useEffect(() => {
    if (auto) {
      timer.current = setTimeout(() => {
        setIndex((prev) => (prev + 1) % images.length);
      }, AUTO_SLIDE_INTERVAL);
    }
    return () => clearTimeout(timer.current);
  }, [index, auto, images.length]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  });

  const next = () => {
    setIndex((i) => (i + 1) % images.length);
    setAuto(false);
  };
  const prev = () => {
    setIndex((i) => (i - 1 + images.length) % images.length);
    setAuto(false);
  };
  const handleOverlay = (e) => {
    if (e.target === overlayRef.current) onClose();
  };

  return (
    <div
      className="modal-gallery-overlay"
      ref={overlayRef}
      onClick={handleOverlay}
      tabIndex={-1}
      style={{
        position: 'fixed', left: 0, top: 0, width: '100vw', height: '100vh',
        background: 'rgba(30,32,38,0.82)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center',
        animation: 'fadeIn 0.2s',
      }}
    >
      <div
        className="modal-gallery-content"
        style={{
          background: '#fff', borderRadius: 24, boxShadow: '0 8px 32px rgba(60,80,180,0.18)',
          padding: 0, maxWidth: 1100, width: '96vw', position: 'relative', overflow: 'hidden',
          display: 'flex', flexDirection: 'column', alignItems: 'center',
          animation: 'slideUp 0.25s',
        }}
      >
        <button
          className="modal-gallery-close"
          onClick={onClose}
          aria-label="Закрыть"
          style={{
            position: 'absolute', top: 24, right: 24,
          }}
        >
          <svg width="28" height="28" viewBox="0 0 24 24" stroke="#fff" strokeWidth="2.5" fill="none">
            <line x1="6" y1="6" x2="18" y2="18" strokeLinecap="round" strokeLinejoin="round" />
            <line x1="18" y1="6" x2="6" y2="18" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <div style={{ width: '100%', height: 640, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', background: '#f3f6fd' }}>
          <button
            className="modal-gallery-arrow"
            onClick={prev}
            aria-label="Назад"
            style={{ position: 'absolute', left: 24, top: '50%', transform: 'translateY(-50%)' }}
          >
            <svg width="28" height="28" viewBox="0 0 24 24" stroke="#fff" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
          </button>
          <img
            src={images[index]}
            alt={title}
            style={{
              maxWidth: '90%', maxHeight: 600, borderRadius: 18, boxShadow: '0 2px 16px rgba(60,80,180,0.10)', objectFit: 'cover',
              transition: 'opacity 0.4s',
              opacity: 1,
            }}
          />
          <button
            className="modal-gallery-arrow"
            onClick={next}
            aria-label="Вперёд"
            style={{ position: 'absolute', right: 24, top: '50%', transform: 'translateY(-50%)' }}
          >
            <svg width="28" height="28" viewBox="0 0 24 24" stroke="#fff" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 6 15 12 9 18"/></svg>
          </button>
        </div>
        <div style={{ padding: '24px 32px 16px 32px', width: '100%', textAlign: 'center' }}>
          <div style={{ fontWeight: 700, fontSize: '1.25rem', marginBottom: 10 }}>{title}</div>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 10, marginTop: 10 }}>
            {images.map((img, i) => (
              <span
                key={i}
                onClick={() => { setIndex(i); setAuto(false); }}
                style={{
                  width: 14, height: 14, borderRadius: '50%', background: i === index ? '#6366f1' : '#d1d5db', display: 'inline-block', cursor: 'pointer', transition: 'background 0.2s',
                }}
              />
            ))}
          </div>
        </div>
      </div>
      <style>{`
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slideUp { from { transform: translateY(40px); opacity: 0; } to { transform: none; opacity: 1; } }
      `}</style>
    </div>
  );
};

export default ModalGallery; 