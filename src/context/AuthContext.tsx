import { createContext, useState, useEffect, type ReactNode } from "react";

interface User {
  id: number;
  dni: number;
  role: string;
}

interface AuthContextType {
  user: User | null;
  token: string | null;
  loading: boolean;
  role: string | null;
  login: (dni: number, password: string) => Promise<Response>;
  logout: () => void;
  isAuthenticated: boolean;
}

export const AuthContext = createContext<AuthContextType | null>(null);

interface Props {
  children: ReactNode;
}

export function AuthProvider({ children }: Props) {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [role, setRole] = useState<string | null>(null);

  useEffect(() => {
    const loadAuth = async () => {
      const savedToken = localStorage.getItem("token");
      const savedUser = localStorage.getItem("user");
      const savedRole = localStorage.getItem("role");

      if (!savedToken) {
        setLoading(false);
        return;
      }

      setToken(savedToken);

      if (savedUser) {
        const parsedUser = JSON.parse(savedUser);
        setUser(parsedUser);
        setRole(savedRole ?? parsedUser.role ?? null);
        setLoading(false);
        return;
      }

      await getUserInfo(savedToken);
      setLoading(false);
    };

    loadAuth();
  }, []);

  const login = async (dni: number, password: string) => {
    const response = await fetch("http://localhost:3000/api/v1/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ dni, password }),
    });

    if (!response.ok) {
      console.error("Login fallido", response.statusText);
      return response;
    }

    const dataParsed = await response.json();
    const data = dataParsed.data;

    setToken(data.token);
    localStorage.setItem("token", data.token);

    await getUserInfo(data.token);

    return response;
  };

  const getUserInfo = async (authToken?: string) => {
    const finalToken = authToken ?? localStorage.getItem("token");

    if (!finalToken) return;

    const response = await fetch("http://localhost:3000/api/v1/auth/profile", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${finalToken}`,
      },
    });

    if (!response.ok) {
      console.error("Token inválido o expirado", response.statusText);
      logout();
      return response;
    }

    const dataParsed = await response.json();
    const data = dataParsed.data;

    setUser(data);
    setRole(data.role);

    localStorage.setItem("user", JSON.stringify(data));
    localStorage.setItem("role", data.role);

    return response;
  };

  const logout = () => {
    setToken(null);
    setUser(null);
    setRole(null);

    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("role");
  };

  const isAuthenticated = !!token && !!user;

  const value: AuthContextType = {
    user,
    token,
    loading,
    role,
    login,
    logout,
    isAuthenticated,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}