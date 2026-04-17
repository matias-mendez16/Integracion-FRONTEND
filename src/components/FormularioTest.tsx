import { useState } from 'react';
import './formularioTest.css';




const questions = [
  {
    id: 1,
    text: "Horizonte Temporal",
    subtext: "¿Por cuánto tiempo planeas mantener tus inversiones?",
    options: [
      { label: "A) Menos de 1 año", points: 1 },
      { label: "B) De 1 a 3 años", points: 4 },
      { label: "C) De 3 a 7 años", points: 7 },
      { label: "D) Más de 7 años", points: 10 }
    ]
  },
  {
    id: 2,
    text: "Objetivo de la Inversión",
    subtext: "¿Cuál es tu principal prioridad al invertir?",
    options: [
      { label: "A) Preservar mi capital sin riesgo", points: 1 },
      { label: "B) Generar ingresos recurrentes", points: 4 },
      { label: "C) Hacer crecer mi capital a largo plazo", points: 7 },
      { label: "D) Lograr retornos masivos asumiendo riesgos", points: 10 }
    ]
  },
  {
    id: 3,
    text: "Conocimiento Financiero",
    subtext: "¿Cuál es tu nivel de conocimiento sobre mercados y cripto?",
    options: [
      { label: "A) Nulo, no entiendo cómo funcionan", points: 1 },
      { label: "B) Básico, entiendo qué es una acción", points: 4 },
      { label: "C) Intermedio, entiendo volatilidad y halving", points: 7 },
      { label: "D) Avanzado, opero con DeFi o derivados", points: 10 }
    ]
  },
  {
    id: 4,
    text: "Reacción ante la Volatilidad",
    subtext: "Si tu portafolio cae un 30% en un mes, ¿qué harías?",
    options: [
      { label: "A) Vendo todo por miedo", points: 1 },
      { label: "B) Me preocupo y vendo una parte", points: 4 },
      { label: "C) No hago nada, confío en mi plan", points: 7 },
      { label: "D) Compro más, aprovecho la oferta", points: 10 }
    ]
  },
  {
    id: 5,
    text: "Capacidad de Ahorro",
    subtext: "¿Qué porcentaje de tus ingresos puedes destinar a invertir?",
    options: [
      { label: "A) Menos del 5%", points: 1 },
      { label: "B) Entre el 5% y el 15%", points: 4 },
      { label: "C) Entre el 15% y el 30%", points: 7 },
      { label: "D) Más del 30%", points: 10 }
    ]
  },
  {
    id: 6,
    text: "Situación Patrimonial",
    subtext: "¿Tienes un fondo de emergencia cubierto?",
    options: [
      { label: "A) No tengo ahorros aparte", points: 1 },
      { label: "B) Tengo ahorros para menos de un mes", points: 4 },
      { label: "C) Sí, tengo un fondo sólido", points: 7 },
      { label: "D) Sí, y tengo otros activos líquidos", points: 10 }
    ]
  },
  {
    id: 7,
    text: "Experiencia Previa",
    subtext: "¿En qué activos has invertido anteriormente?",
    options: [
      { label: "A) Solo cuentas de ahorro", points: 1 },
      { label: "B) Fondos comunes o bonos", points: 4 },
      { label: "C) Acciones individuales o ETFs", points: 7 },
      { label: "D) Criptomonedas, opciones o futuros", points: 10 }
    ]
  },
  {
    id: 8,
    text: "Composición del Portafolio Ideal",
    subtext: "¿Cómo te sentirías más cómodo distribuyendo tu dinero?",
    options: [
      { label: "A) 100% efectivo o bonos", points: 1 },
      { label: "B) 70% bonos y 30% acciones", points: 4 },
      { label: "C) 50% acciones y 50% activos de riesgo", points: 7 },
      { label: "D) 80-100% en Cripto/Alta volatilidad", points: 10 }
    ]
  },
  {
    id: 9,
    text: "Entendimiento del Riesgo de Bitcoin",
    subtext: "¿Entiendes que Bitcoin puede caer un 50% o ir a cero?",
    options: [
      { label: "A) No, creí que siempre subía", points: 1 },
      { label: "B) Me cuesta aceptarlo, pero lo sé", points: 4 },
      { label: "C) Lo entiendo y asumo el riesgo", points: 7 },
      { label: "D) Lo prefiero antes que el sistema fiat", points: 10 }
    ]
  },
  {
    id: 10,
    text: "Ingresos Futuros",
    subtext: "¿Cuál es tu expectativa de ingresos profesionales?",
    options: [
      { label: "A) Disminuirán o son inestables", points: 1 },
      { label: "B) Se mantendrán estables", points: 4 },
      { label: "C) Aumentarán ligeramente", points: 7 },
      { label: "D) Aumentarán significativamente", points: 10 }
    ]
  }
];

export default function App() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selections, setSelections] = useState(Array(questions.length).fill(null));
  const [finished, setFinished] = useState(false);

  const handleSelect = (points:any) => {
    const updated = [...selections];
    updated[currentIdx] = points;
    setSelections(updated);
    
    if (currentIdx < questions.length - 1) {
      setTimeout(() => setCurrentIdx(currentIdx + 1), 250);
    }
  };

  const getScore = () => selections.reduce((a, b) => a + (b || 0), 0);

  const getResultData = (score:any) => {
    if (score <= 30) return {
      perfil: "CONSERVADOR",
      estrategia: "Prioridad absoluta a la seguridad.",
      activos: "Bonos, Plazos fijos, Stablecoins.",
      exposicion: "0-5%",
      clase: "perfil-conservador"
    };
    if (score <= 60) return {
      perfil: "MODERADO",
      estrategia: "Equilibrio entre crecimiento y seguridad.",
      activos: "S&P 500 y Bonos.",
      exposicion: "5-15% (BTC/ETH)",
      clase: "perfil-moderado"
    };
    if (score <= 85) return {
      perfil: "CRECIMIENTO / AGRESIVO",
      estrategia: "Busca ganancia de capital a largo plazo.",
      activos: "Acciones tecnológicas y Cripto.",
      exposicion: "20-40%",
      clase: "perfil-agresivo"
    };
    return {
      perfil: "EXPERTO / MUY AGRESIVO",
      estrategia: "Maximización de retornos.",
      activos: "Bitcoin, Altcoins, DeFi.",
      exposicion: "+50%",
      clase: "perfil-experto"
    };
  };

  if (finished) {
    const total = getScore();
    const result = getResultData(total);
    return (
      <div className="">
        <div className={`result-card ${result.clase}`}>
          <h2>Tu Perfil: {result.perfil}</h2>
          <div className="score-badge">Puntaje: {total}/100</div>
          <div className="result-details">
            <p><strong>Estrategia:</strong> {result.estrategia}</p>
            <p><strong>Activos:</strong> {result.activos}</p>
            <p className="highlight-box"><strong>Exposición Cripto Sugerida:</strong> {result.exposicion}</p>
          </div>
          <button className="btn-reset" onClick={() => {
            setSelections(Array(questions.length).fill(null));
            setCurrentIdx(0);
            setFinished(false);
          }}>Reiniciar Test</button>
        </div>
      </div>
    );
  }

  const q = questions[currentIdx];
  const progress = ((currentIdx + 1) / questions.length) * 100;

  return (
    <div className="">
      <div className="test-card">
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${progress}%` }}></div>
        </div>
        {/*
        <div className="test-header">
          <span className="step-indicator">Pregunta {currentIdx + 1} de {questions.length}</span>
          <span className="current-score">Puntos: {getScore()}</span>
        </div> */}

        <h3>{q.text}</h3>
        <p className="subtext">{q.subtext}</p>

        <div className="options-grid">
          {q.options.map((opt, i) => (
            <button
              key={i}
              className={`option-btn ${selections[currentIdx] === opt.points ? 'active' : ''}`}
              onClick={() => handleSelect(opt.points)}
            >
              {opt.label}
            </button>
          ))}
        </div>

        <div className="nav-controls">
          <button 
            disabled={currentIdx === 0} 
            onClick={() => setCurrentIdx(currentIdx - 1)}
            className="btn-nav"
          >
            Anterior
          </button>
          {(currentIdx === questions.length - 1) ?  (
            <button 
              disabled={selections[currentIdx] === null}
              onClick={() => {setFinished(true)}}
              className="btn-finish"
              style={{
    backgroundColor: selections[currentIdx] === null ? 'grey' : 'var(--colorSecundario)',
    cursor: selections[currentIdx] === null ? 'not-allowed' : 'pointer',
    boxShadow: selections[currentIdx] === null ? 'none' : '0px 0px 15px 10px #DDA0DD',
    transition: 'background-color 0.3s ease'
  }}
            >
              Ver Resultados
            </button>
          ) : (
            <button 
              disabled={selections[currentIdx] === null}
              onClick={() => setCurrentIdx(currentIdx + 1)}
              className="btn-nav"
            >
              Siguiente
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
