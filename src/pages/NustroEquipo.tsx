import styles from './NuestroEquipo.module.css'

const equipo = [
    { id: 1, nombre: "Roberto Garcia", img: "https://randomuser.me/api/portraits/men/1.jpg", descripcion: "Desarrollador Full Stack"},
    { id:2 , nombre: "Juan López", img: "https://randomuser.me/api/portraits/men/10.jpg", descripcion: "Diseñador UX" },
    { id:3, nombre: "Carlos Rodríguez", img: "https://randomuser.me/api/portraits/men/20.jpg", descripcion: "Analista de Datos" },
    { id:4, nombre: "Ana Martínez", img: "https://randomuser.me/api/portraits/women/2.jpg", descripcion: "Especialista en Marketing" }
]

export function NuestroEquipo() {

    return (
        <div className={styles.container}>
            <h1 className={styles.h1}>Nuestro equipo: Funcion de tecnologia, educacion y respaldo regulatorio</h1>
            <h3 className={styles.h3}>Somos un equipo de desarrolladores e ideólogos apasionados por la rentabilidad, complementados por un experto autorizado por la CVN.
                Nuestra misión es democratizar la inversión con seguridad y legalidad.
            </h3>

            <h2 className={styles.h2}>Nuestros pilares</h2>
            <h4 className={styles.h4}>-Transparencia total: Tarisfas y riesgos claros.</h4>
            <h4 className={styles.h4}>-Innovación: La mejor tecnología, bajo estrícto cumplimiento normativo.</h4>
            <h4 className={styles.h4}>-Educacion continua: Herramientas para el crecimiento del inversor.</h4>

            <div className={styles.equipo}>

                {equipo.map((persona) => (
                    <div key={persona.id} className={styles.card}>
                        <img className={styles.img} src={persona.img} alt={persona.nombre} />
                        <p className={styles.nombre}>{persona.nombre}</p>
                        <p className={styles.descripcion}>{persona.descripcion}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}