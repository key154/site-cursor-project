import React, { useState } from 'react';

const TYPES = [
  { value: 'letters', label: 'Объёмные буквы' },
  { value: 'box', label: 'Световой короб' },
];
const BASES = [
  { value: 'frame', label: 'На рамке' },
  { value: 'akp', label: 'На подложке из АКП' },
];
const DEPTHS = [60, 80];
const LIGHTS = [
  { value: 'none', label: 'Без подсветки' },
  { value: 'front', label: 'Фронтальная' },
  { value: 'back', label: 'Контражур' },
  { value: 'combo', label: 'Комбинированная' },
];
const COLORS = [
  { value: 'white', label: 'Белый' },
  { value: 'black', label: 'Чёрный' },
  { value: 'red', label: 'Красный' },
  { value: 'blue', label: 'Синий' },
  { value: 'custom', label: 'Другой (указать)' },
];

const TELEGRAM_BOT_TOKEN = '7956849192:AAF-q5VLu2lB4YgtlgpOLDqkSHZqogWtPpU';
const TELEGRAM_CHAT_ID = '-4839732228';

const CalculatorModal = ({ open, onClose }) => {
  const [step, setStep] = useState(0);
  const [type, setType] = useState('');
  const [base, setBase] = useState('');
  const [height, setHeight] = useState('');
  const [depth, setDepth] = useState(DEPTHS[0]);
  const [width, setWidth] = useState('');
  const [substrate, setSubstrate] = useState({ width: '', height: '', depth: '' });
  const [lettersCount, setLettersCount] = useState('');
  const [light, setLight] = useState('');
  const [color, setColor] = useState('');
  const [customColor, setCustomColor] = useState('');
  const [substrateColor, setSubstrateColor] = useState('');
  const [substrateCustomColor, setSubstrateCustomColor] = useState('');
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  if (!open) return null;

  const next = () => setStep(s => s + 1);
  const prev = () => setStep(s => s - 1);
  const close = () => { setStep(0); setType(''); setBase(''); setHeight(''); setDepth(DEPTHS[0]); setWidth(''); setSubstrate({ width: '', height: '', depth: '' }); setLettersCount(''); setLight(''); setColor(''); setCustomColor(''); setSent(false); onClose(); };

  // Итоговые данные для отправки
  const summary = () => {
    let res = [];
    if (type === 'letters') {
      res.push('Тип: Объёмные буквы');
      res.push('Основа: ' + (base === 'frame' ? 'На рамке' : 'На подложке из АКП'));
      res.push('Высота буквы: ' + height + ' мм');
      res.push('Глубина буквы: ' + depth + ' мм');
      res.push('Количество символов: ' + lettersCount);
      if (base === 'akp') {
        res.push('Размер подложки: ' + substrate.width + 'x' + substrate.height + 'x' + substrate.depth + ' мм');
        res.push('Цвет подложки: ' + (substrateColor==='custom'?substrateCustomColor:COLORS.find(c=>c.value===substrateColor)?.label||''));
      }
    } else if (type === 'box') {
      res.push('Тип: Световой короб');
      res.push('Ширина: ' + width + ' мм');
      res.push('Высота: ' + height + ' мм');
      res.push('Глубина: ' + depth + ' мм');
    }
    res.push('Подсветка: ' + (LIGHTS.find(l=>l.value===light)?.label||''));
    res.push('Цвет букв: ' + (color==='custom'?customColor:COLORS.find(c=>c.value===color)?.label||''));
    return res;
  };

  // Функция расчёта цены
  const calcPrice = () => {
    if (type === 'letters') {
      // Цена за символ
      const h = Number(height) || 0;
      const n = Number(lettersCount) || 0;
      let pricePerSymbol = Math.round((h / 10) * 100);
      if (depth === 80) pricePerSymbol = Math.round(pricePerSymbol * 1.1);
      let total = pricePerSymbol * n;
      // Надбавка за подсветку
      const lightCoef = {
        none: 1,
        front: 1.3,
        back: 1.3,
        combo: 1.4,
      };
      total = total * (lightCoef[light] || 1);
      if (base === 'akp') {
        const w = Number(substrate.width) || 0;
        const sh = Number(substrate.height) || 0;
        const area = (w * sh) / 1_000_000; // м²
        const substratePrice = area * 4000;
        total += substratePrice;
      }
      return total;
    }
    if (type === 'box') {
      const w = Number(width) || 0;
      const h = Number(height) || 0;
      const area = (w * h) / 1_000_000; // м²
      const price = area * 25000;
      return price;
    }
    return 0;
  };

  // Форма отправки
  const handleSend = async (e) => {
    e.preventDefault();
    setSending(true);
    const form = e.target;
    const name = form[0].value;
    const phone = form[1].value;
    const email = form[2].value;
    // Собираем параметры калькулятора
    const params = summary().join('\n');
    const text = `Заявка из калькулятора сайта "Ща всё будет":\n${params}\nИтоговая цена: ${calcPrice().toLocaleString()} ₽\nИмя: ${name}\nТелефон: ${phone}\nEmail: ${email}`;
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
        alert('Ошибка отправки. Попробуйте позже.');
      }
    } catch {
      alert('Ошибка отправки. Попробуйте позже.');
    }
    setSending(false);
  };

  // В обработчике выбора типа:
  const handleTypeChange = (val) => {
    setType(val);
    setStep(0);
    setBase('');
    setHeight('');
    setDepth(DEPTHS[0]);
    setWidth('');
    setSubstrate({ width: '', height: '', depth: '' });
    setLettersCount('');
    setLight('');
    setColor('');
    setCustomColor('');
    setSent(false);
  };

  // Определяю текущий шаг для каждого сценария
  const getStepContent = () => {
    if (!type) return 'type';
    if (type === 'letters') {
      if (step === 0) return 'type';
      if (step === 1) return 'base';
      if (step === 2) return 'size';
      if (step === 3) return 'light';
      if (step === 4) return 'color';
      if (step === 5) return 'summary';
    }
    if (type === 'box') {
      if (step === 0) return 'type';
      if (step === 1) return 'size';
      if (step === 2) return 'color';
      if (step === 3) return 'summary';
    }
    return null;
  };
  const stepContent = getStepContent();
  const totalSteps = !type ? 1 : type === 'letters' ? 6 : type === 'box' ? 4 : 1;

  return (
    <div className="modal-overlay" style={{position:'fixed',left:0,top:0,width:'100vw',height:'100vh',zIndex:2000,background:'rgba(30,32,38,0.65)',display:'flex',alignItems:'center',justifyContent:'center'}}>
      <div className="modal-content" style={{background:'#fff',borderRadius:18,boxShadow:'0 8px 32px rgba(60,80,180,0.18)',padding:28,maxWidth:400,width:'96vw',position:'relative'}}>
        <button onClick={close} style={{position:'absolute',top:16,right:16,zIndex:2,background:'none',border:'none',cursor:'pointer'}}>
          <svg width="24" height="24" viewBox="0 0 24 24" stroke="#6366f1" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"><line x1="6" y1="6" x2="18" y2="18"/><line x1="18" y1="6" x2="6" y2="18"/></svg>
        </button>
        <div style={{marginBottom:18,fontWeight:700,fontSize:'1.18rem'}}>Калькулятор вывески</div>
        <div style={{marginBottom:18,fontSize:'0.98rem',color:'#6366f1'}}>Шаг {step+1} из {totalSteps}</div>
        {/* Шаг 1: Тип */}
        {stepContent==='type' && (
          <div>
            <div style={{marginBottom:10}}>Тип вывески:</div>
            {TYPES.map(t => (
              <label key={t.value} style={{display:'block',marginBottom:8,cursor:'pointer'}}>
                <input type="radio" name="type" value={t.value} checked={type===t.value} onChange={()=>handleTypeChange(t.value)} /> {t.label}
              </label>
            ))}
            <button disabled={!type} onClick={next} style={{marginTop:18,width:'100%'}}>Далее</button>
          </div>
        )}
        {/* Шаг 2: Основа (только для букв) */}
        {stepContent==='base' && type==='letters' && (
          <div>
            <div style={{marginBottom:10}}>Основа:</div>
            {BASES.map(b => (
              <label key={b.value} style={{display:'block',marginBottom:8,cursor:'pointer'}}>
                <input type="radio" name="base" value={b.value} checked={base===b.value} onChange={()=>setBase(b.value)} /> {b.label}
              </label>
            ))}
            <button onClick={prev} style={{marginTop:18,marginRight:8}}>Назад</button>
            <button disabled={!base} onClick={next} style={{marginTop:18}}>Далее</button>
          </div>
        )}
        {/* Шаг 3: Размеры */}
        {stepContent==='size' && (
          <div>
            <div style={{marginBottom:10}}>Размеры:</div>
            {type==='letters' && (
              <>
                <label style={{display:'block',marginBottom:8}}>Высота буквы (мм): <input type="number" min={50} max={3000} value={height} onChange={e=>setHeight(e.target.value)} style={{width:90,marginLeft:8}} /></label>
                <label style={{display:'block',marginBottom:8}}>Глубина буквы:
                  <select value={depth} onChange={e=>setDepth(Number(e.target.value))} style={{marginLeft:8}}>
                    {DEPTHS.map(d=>(<option key={d} value={d}>{d} мм</option>))}
                  </select>
                </label>
                <label style={{display:'block',marginBottom:8}}>Количество символов: <input type="number" min={1} max={100} value={lettersCount} onChange={e=>setLettersCount(e.target.value)} style={{width:60,marginLeft:8}} /></label>
                {base==='akp' && (
                  <>
                    <div style={{margin:'10px 0 4px 0',fontWeight:600}}>Размер подложки:</div>
                    <label style={{display:'block',marginBottom:8}}>Ширина (мм): <input type="number" min={100} max={10000} value={substrate.width} onChange={e=>setSubstrate(s=>({...s,width:e.target.value}))} style={{width:90,marginLeft:8}} /></label>
                    <label style={{display:'block',marginBottom:8}}>Высота (мм): <input type="number" min={50} max={3000} value={substrate.height} onChange={e=>setSubstrate(s=>({...s,height:e.target.value}))} style={{width:90,marginLeft:8}} /></label>
                    <label style={{display:'block',marginBottom:8}}>Глубина (мм): <input type="number" min={2} max={50} value={substrate.depth} onChange={e=>setSubstrate(s=>({...s,depth:e.target.value}))} style={{width:90,marginLeft:8}} /></label>
                  </>
                )}
              </>
            )}
            {type==='box' && (
              <>
                <label style={{display:'block',marginBottom:8}}>Ширина (мм): <input type="number" min={100} max={10000} value={width} onChange={e=>setWidth(e.target.value)} style={{width:90,marginLeft:8}} /></label>
                <label style={{display:'block',marginBottom:8}}>Высота (мм): <input type="number" min={50} max={3000} value={height} onChange={e=>setHeight(e.target.value)} style={{width:90,marginLeft:8}} /></label>
                <label style={{display:'block',marginBottom:8}}>Глубина (мм): <input type="number" min={20} max={300} value={depth} onChange={e=>setDepth(Number(e.target.value))} style={{width:90,marginLeft:8}} /></label>
              </>
            )}
            <button onClick={prev} style={{marginTop:18,marginRight:8}}>Назад</button>
            <button
              style={{marginTop:18}}
              disabled={
                (type==='letters' && (
                  !height || !depth || !lettersCount || Number(lettersCount)<1 || Number(height)<50 || (base==='akp' && (!substrate.width || !substrate.height || !substrate.depth))
                )) ||
                (type==='box' && (!width || !height || !depth))
              }
              onClick={next}
            >Далее</button>
          </div>
        )}
        {/* Шаг 4: Подсветка */}
        {stepContent==='light' && type==='letters' && (
          <div>
            <div style={{marginBottom:10}}>Тип подсветки:</div>
            {LIGHTS.map(l => (
              <label key={l.value} style={{display:'block',marginBottom:8,cursor:'pointer'}}>
                <input type="radio" name="light" value={l.value} checked={light===l.value} onChange={()=>setLight(l.value)} /> {l.label}
              </label>
            ))}
            <button onClick={prev} style={{marginTop:18,marginRight:8}}>Назад</button>
            <button disabled={!light} onClick={next} style={{marginTop:18}}>Далее</button>
          </div>
        )}
        {/* Шаг 4: Цвет */}
        {stepContent==='color' && (
          <div>
            <div style={{marginBottom:10}}>Цвет букв:</div>
            {COLORS.map(c => (
              <label key={c.value} style={{display:'block',marginBottom:8,cursor:'pointer'}}>
                <input type="radio" name="color" value={c.value} checked={color===c.value} onChange={()=>setColor(c.value)} /> {c.label}
              </label>
            ))}
            {color==='custom' && (
              <input type="text" placeholder="Укажите цвет (например, RAL 9003)" value={customColor} onChange={e=>setCustomColor(e.target.value)} style={{width:'100%',marginTop:8}} />
            )}
            {/* Цвет подложки если выбрана подложка */}
            {type==='letters' && base==='akp' && (
              <div style={{marginTop:18}}>
                <div style={{marginBottom:10}}>Цвет подложки:</div>
                {COLORS.map(c => (
                  <label key={c.value} style={{display:'block',marginBottom:8,cursor:'pointer'}}>
                    <input type="radio" name="substrateColor" value={c.value} checked={substrateColor===c.value} onChange={()=>setSubstrateColor(c.value)} /> {c.label}
                  </label>
                ))}
                {substrateColor==='custom' && (
                  <input type="text" placeholder="Укажите цвет подложки (например, RAL 9003)" value={substrateCustomColor} onChange={e=>setSubstrateCustomColor(e.target.value)} style={{width:'100%',marginTop:8}} />
                )}
              </div>
            )}
            <button onClick={prev} style={{marginTop:18,marginRight:8}}>Назад</button>
            <button disabled={!color || (color==='custom' && !customColor) || (type==='letters' && base==='akp' && (!substrateColor || (substrateColor==='custom' && !substrateCustomColor)))} onClick={next} style={{marginTop:18}}>Далее</button>
          </div>
        )}
        {/* Шаг 5: Итог и отправка */}
        {stepContent==='summary' && (
          <div>
            <div style={{marginBottom:10,fontWeight:600}}>Параметры заявки:</div>
            <ul style={{marginBottom:18,paddingLeft:18}}>
              {summary().map((s,i)=>(<li key={i}>{s}</li>))}
            </ul>
            <div style={{marginBottom:18,fontWeight:700,fontSize:'1.15rem',color:'#6366f1'}}>Итоговая цена: {calcPrice().toLocaleString()} ₽</div>
            <div style={{marginBottom:18, fontSize:'0.98rem', color:'#888'}}>Стоимость примерная, цена изготовления напрямую зависит от макета.</div>
            {sent ? (
              <div style={{color:'#22c55e',fontWeight:700,fontSize:'1.1rem',margin:'24px 0'}}>Заявка отправлена! Мы свяжемся с вами.</div>
            ) : (
              <form onSubmit={handleSend}>
                <input type="text" placeholder="Ваше имя" required style={{width:'100%',marginBottom:10}} />
                <input type="tel" placeholder="Телефон" required style={{width:'100%',marginBottom:10}} />
                <input type="email" placeholder="E-mail (необязательно)" style={{width:'100%',marginBottom:10}} />
                <button type="submit" style={{width:'100%'}} disabled={sending}>{sending?'Отправка...':'Отправить заявку'}</button>
              </form>
            )}
            <button onClick={prev} style={{marginTop:18}}>Назад</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CalculatorModal; 