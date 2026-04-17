import styles from '../styles/FAQ.module.css'

export function FAQ() {
    return (
        <div className={styles.container}>
            <h1>Preguntas frecuentes</h1>
            <h2>Sobre la plataforma</h2>
            <h3>¿Qué es Liberty Finance?</h3>
            <p>Es una plataforma web educativa y de inversión que te permite conocer, comparar y acceder a instrumentos financieros tradicionales y no tradicionales. Nuestro objetivo es ayudarte a tomar decisiones informadas para alcanzar tu libertad financiera.</p>
            <h3>¿Es necesario registrarse para usar la plataforma?</h3>
            <p>No. Podés navegar como usuario invitado y acceder a información básica sobre rendimientos y riesgos de distintos instrumentos. Sin embargo, al registrarte podrás acceder a funcionalidades adicionales como el test de inversor, el carrito de inversiones y los cursos especializados.</p>
            <h3>¿Tiene algún costo usar Liberty Finance?</h3>
            <p>El acceso básico es gratuito. Existen distintos niveles de membresía (Premium y Asesoramiento Personalizado) que habilitan contenido y servicios exclusivos.</p>
        </div>
    )
}