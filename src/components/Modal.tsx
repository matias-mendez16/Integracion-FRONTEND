import React, { type ReactNode } from 'react';
import "./Modal.css"

interface ModalProps {
  estaAbierto: boolean;
  cerrar: () => void;
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ estaAbierto, cerrar, children }) => {
  if (!estaAbierto) return null;

  return (
    <div className="capaFondo" onClick={cerrar}>
      <div className="contModal" onClick={(e) => e.stopPropagation()}>
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