import React, { type ReactNode } from 'react';
import "./Modal.css"

// 1. Definimos qué necesita el modal para funcionar
interface ModalProps {
  estaAbierto: boolean;        // Controla si se ve o no
  cerrar: () => void;    // Función para cerrar
  children: ReactNode;    // El contenido (texto, otros componentes, etc.)
}

const Modal: React.FC<ModalProps> = ({ estaAbierto, cerrar, children }) => {
  if (!estaAbierto) return null;

  return (
    <div 
      className="capaFondo"
      onClick={cerrar} // Cierra al hacer clic fuera
    >
      <div className="contModal"
        onClick={(e) => e.stopPropagation()} // Evita cerrar al hacer clic dentro
      >
        <div className="contBotonX">
          <button onClick={cerrar} className="botonCerrarX">
            ✕
          </button>
        </div>
        <div id='contTextoModal'>
          {children}
        </div>
        <div id='contBotonCerrar'>
          <button onClick={cerrar} className="botonCerrar">Cerrar</button>            
        </div>

      </div>
    </div>
  );
};

export default Modal;