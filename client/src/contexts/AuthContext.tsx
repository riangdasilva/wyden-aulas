import { createContext, useState, useEffect } from "react";
import jwtDecode from "jwt-decode";

interface DecodedToken {
  exp: number;
}

interface AuthContextType {
  token: string | null;
  updateToken: (newToken: string) => void;
  logout: () => void;
  isTokenValid: () => boolean;
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

function AuthProvider({ children }: { children: React.ReactNode }) {
  const [token, setToken] = useState<string | null>(
    localStorage.getItem("token")
  );

  useEffect(() => {
    const fetchedToken = localStorage.getItem("token");
    if (fetchedToken) {
      setToken(fetchedToken);
    }
  }, []);

  function updateToken(newToken: string) {
    localStorage.setItem("token", newToken);
    setToken(newToken);
  }

  function logout() {
    localStorage.removeItem("token");
    setToken(null);
  }

  function isTokenValid() {
    if (!token) {
      return false;
    }
    const decodedToken: DecodedToken = jwtDecode(token);
    const currentTime = Date.now() / 1000;
    return decodedToken.exp > currentTime;
  }

  return (
    <AuthContext.Provider value={{ token, updateToken, logout, isTokenValid }}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };
