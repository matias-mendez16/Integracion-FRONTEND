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
    formState: { errors },
  } = useForm<datosRecibidos>();

  const enviarForm = (data:datosRecibidos) => {
    console.log(data);
  };
  console.log(errors);
  return (
    <section id={styles.contLogin}>
      <form action="" id={styles.formLogin} onSubmit={handleSubmit(enviarForm)}>
        <label htmlFor="dni_usuario">DNI</label>
        <input id="dni_usuario" maxLength={8}
          type="text"
          {...register("dni_usuario", {
            required: "Debe ingresar DNI.",
            pattern: { value: /^[0-9]+$/, message: "Solo se permiten números" },
            minLength:{value:7,message:"Deben ser mínimo 7 números"},
            maxLength:{value:8,message:"Deben ser máximo 8 números"},
          })}
          placeholder="26134695"
        />
        {errors.dni_usuario && <p>{String(errors.dni_usuario.message)}</p>}
        <label htmlFor="password">Password</label>        
        <input id="password" maxLength={8}
          type="password"
          {...register("password", {
            required: "Debe ingresar password.",
            pattern: { value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[*#]).{8,10}$/, message: "Debe incluir minúscula, mayúscula y un caracter especial (* o #)" },
            minLength:{value:8,message:"Deben ser mínimo 7 caracteres"},
            maxLength:{value:10,message:"Deben ser máximo 8 caracteres"},
          })}
          placeholder="********"
        />      
        {errors.password && <p>{String(errors.password.message)}</p>}  
        <button>Login</button>
      </form>
    </section>
  );
}

export default LoginUser;

/*
      <p>{errors.dni_usuario?.message? `${errors.dni_usuario.message}`:""}</p>

*/
