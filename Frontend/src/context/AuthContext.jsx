import {
  createContext,
  useEffect,
  useState,
} from "react";

import { getCurrentUser } from "../services/authService";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null);

  const [token, setToken] = useState(
    localStorage.getItem("token")
  );

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const fetchUser = async () => {

      if (!token) {

        setLoading(false);

        return;
      }

      try {

        const userData = await getCurrentUser();

        setUser(userData);

      } catch (error) {

        console.error(error);

        logout();

      } finally {

        setLoading(false);

      }

    };

    fetchUser();

  }, [token]);

  const login = (jwtToken, userData) => {

    localStorage.setItem(
      "token",
      jwtToken
    );

    setToken(jwtToken);

    setUser(userData);
  };

  const logout = () => {

    localStorage.removeItem("token");

    setToken(null);

    setUser(null);
  };

  return (

    <AuthContext.Provider
      value={{
        user,
        token,
        loading,
        login,
        logout,
      }}
    >

      {children}

    </AuthContext.Provider>

  );
};

export default AuthProvider;