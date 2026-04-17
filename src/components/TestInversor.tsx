import { useState } from "react";
import Modal from "./Modal";
import FormularioTest from "./FormularioTest"
import "./testInversor.css"


function TestInversor() {
      const [modalAbierto, setModalAbierto] = useState(false);
  return (
    <div className="contTestInversor">
      <h2>¿Queres saber que tipo de inversor sos?</h2>
      <button onClick={() => setModalAbierto(true)} id="botonTest">TEST</button>
      <Modal estaAbierto={modalAbierto} cerrar={() => setModalAbierto(false)}>
        <FormularioTest/> 
      </Modal>
    </div>
  )
}

export default TestInversor