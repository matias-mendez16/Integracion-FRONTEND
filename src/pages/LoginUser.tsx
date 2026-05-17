import { useForm } from "react-hook-form";
import styles from "../pages/styles/loginUser.module.css";

interface datosRecibidos {
  dni_usuario: string;
  password: string;
}

function LoginUser() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<datosRecibidos>({
    mode: "onTouched", //valida campos solo al enviar
    defaultValues: {
      dni_usuario: "",
      password: "",
    },
  });

  const enviarForm = async(data: datosRecibidos) => {
    console.log(data.dni_usuario);
    console.log(data.password);
    const dni=data.dni_usuario;
    const pass="1234";
    
    const response = await fetch('http://localhost:3000/api/v1/auth/login',{
        method: "POST",
        headers:{
            "content-type":"application/json"
        },
        body: JSON.stringify({dni_usuario:dni,contraseña:pass})
    })
    if (!response.ok){
        const data= await response.json();
        console.log(data);
        console.log(dni," ",pass)
        console.error("Login Fallido",response.statusText)
    } else {
        const data= await response.json();
        console.log(data);
  }


  };

  console.log(errors);
  return (
    <section id={styles.contLogin}>
      <form action="" id={styles.formLogin} onSubmit={handleSubmit(enviarForm)}>
        <label htmlFor="dni_usuario" className={styles.etiquetaForm}>
          DNI
        </label>
        <input
          className={styles.inputForm}
          id="dni_usuario"
          maxLength={8}
          autoComplete="off"
          type="text"
          {...register("dni_usuario", {
            required: "Debe ingresar DNI.",
            pattern: { value: /^[0-9]+$/, message: "Solo se permiten números" },
            minLength: { value: 7, message: "Deben ser mínimo 7 números" },
            maxLength: { value: 8, message: "Deben ser máximo 8 números" },
          })}
          placeholder="Ingresa tu DNI"
        />
        {
          <span className={styles.errorLogin}>
            {errors.dni_usuario? String(errors.dni_usuario.message) : ""}
          </span>
        }
        <label htmlFor="password" className={styles.etiquetaForm}>
          Password
        </label>
        <input
          className={styles.inputForm}
          id="password"
          maxLength={10}
          autoComplete="off"
          type="password"
          {...register("password", {
            required: "Debe ingresar password.",
            pattern: {
              value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[*#]).{8,10}$/,
              message: `Incluir minúscula, mayúscula y "* o #"`,
            },
            minLength: { value: 8, message: "Deben ser mínimo 8 caracteres" },
            maxLength: { value: 10, message: "Deben ser máximo 10 caracteres" },
          })}
          placeholder="********"
        />
        {
          <span className={styles.errorLogin}>
            {errors.password ? String(errors.password.message) : ""}
          </span>
        }
        <button className={styles.botonLogin}>Login</button>
        <div id={styles.contRegistro}>
          <span>¿No tienes cuenta?</span>
          <a href="">Crear una</a>
        </div>
      </form>
    </section>
  );
}

export default LoginUser;