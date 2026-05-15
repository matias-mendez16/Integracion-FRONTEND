import { useForm } from "react-hook-form";
import styles from "../pages/styles/loginUser.module.css"


interface datosRecibidos{
  dni_usuario: string,
  password:string
}

function LoginUser() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<datosRecibidos>({
  mode: "onChange" // Esto hace que valide mientras escriben
});

  const enviarForm = (data:datosRecibidos) => {
    console.log(data);
  };
  console.log(errors);
  return (
    <section id={styles.contLogin}>
      <form action="" id={styles.formLogin} onSubmit={handleSubmit(enviarForm)}>
        <label htmlFor="dni_usuario" className={styles.etiquetaForm}>DNI</label>
        <input className={styles.inputForm} id="dni_usuario" maxLength={8}
          type="text"
          {...register("dni_usuario", {
            required: "Debe ingresar DNI.",
            pattern: { value: /^[0-9]+$/, message: "Solo se permiten números" },
            minLength:{value:7,message:"Deben ser mínimo 7 números"},
            maxLength:{value:8,message:"Deben ser máximo 8 números"},
          })}
          placeholder="Ingresa tu DNI"
        />
        {<span className={styles.errorLogin}>{errors.dni_usuario?String(errors.dni_usuario.message):""}</span>}
        <label htmlFor="password" className={styles.etiquetaForm}>Password</label>        
        <input className={styles.inputForm} id="password" maxLength={8}
          autoComplete="off"
          type="password"
          {...register("password", {
            required: "Debe ingresar password.",
            pattern: { value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[*#]).{8,10}$/, message: `Incluir minúscula, mayúscula y "* o #"` },
            minLength:{value:8,message:"Deben ser mínimo 7 caracteres"},
            maxLength:{value:10,message:"Deben ser máximo 8 caracteres"},
          })}
          placeholder="********"
        />      
        {<span className={styles.errorLogin}>{errors.password?String(errors.password.message):""}</span>}  
        <button className={styles.botonLogin} disabled={!isValid}
        style={{ opacity: isValid ? 1 : 0.5, cursor: isValid ? 'pointer' : 'not-allowed' }}
        >Login</button>
            <div id={styles.contRegistro}>
        <span>¿No tienes cuenta?</span><a href="">Crear una</a>        
      </div>
      </form>
    </section>
  );
}

export default LoginUser;

