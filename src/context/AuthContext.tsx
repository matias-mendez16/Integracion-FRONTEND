import React, {createContext, useContext, useState, useEffect, ReactNode} from 'react'

interface User{
  dni_usuario: number;
  nombre:string;
  apellido:string;
  mail:string;
  contraseña:string;
  numero_telefono:string;
  direccion: string;
  id_perfilinv:number;
  id_codigo_referidos:number;
  rol:number;
  provincia:number;
}

interface AuthContextType{
    user: User | null;
    token: string | null;
    loading: boolean;
    role: number | null;
    login: (dni_usuario:number, password:string)=> Promise<Response>;
    logout: ()=> void;
    isAuthenticated:Boolean;
}

const AuthContext=createContext<AuthContextType | null>(null);

export function AuthProvider({children}:{children: ReactNode}){
    const [user, setUser] = useState<User | null>(null);
    const [token, setToken] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [role, setRole] = useState<number | null>(null);

    useEffect(()=>{
       const savedToken=localStorage.getItem('token');
       const savedUser=localStorage.getItem('user');
       if (savedToken && savedUser){
          setToken(savedToken);
          setUser(JSON.parse(savedUser));
       }
       setLoading(false);
    },[]);


const login =async (dni_usuario:number,password:string)=>{

    const response = await fetch('http://localhost:3000/api/v1/auth/login',{
        method: "POST",
        headers:{
            "content-type":"application/json"
        },
        body: JSON.stringify({dni_usuario,password})
    })
    if (!response.ok){
        console.error("Login Fallido",response.statusText)
    } else {
        const data = await response.json();
        setToken(data.token);
        setUser(data.user);
        setRole(data.user.role);
        localStorage.setItem("token", data.token);
        localStorage.setItem("user",JSON.stringify(data.user));
    }
    return response;
};
const logout= () => {
    setToken(null);
    setUser(null);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
}
const isAuthenticated = !!token && !!user;

const value: AuthContextType ={
    user,
    token,
    loading,
    role,
    login,
    logout,
    isAuthenticated,
};

return <AuthContext.Provider value={value}>
           {children}
    </AuthContext.Provider>;
}

export function useAuth(){
    const context = useContext(AuthContext)
    if (!context){
         throw new Error("useAuth debe usarse dentro de AuthProvider")
    }
    return context;
}