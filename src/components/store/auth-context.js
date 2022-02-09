import React, { useEffect, useState } from "react";

const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogin: (email, password) => {},
  onLogout: () => {},
});

export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const isconect = localStorage.getItem("isLoggedIn");

    if (isconect === "1") {
      setIsLoggedIn(true);
    }
  }, []);

  const loginHandler = (email, password) => {
    // Por supuesto, debemos verificar el correo electrónico y la contraseña.
    // Pero es solo una demostración ficticia de todos modos
    setIsLoggedIn(true);

    // Almacenamos en local storage 1:conectado / 0:desconectado
    localStorage.setItem("isLoggedIn", 1);
  };

  const logoutHandler = () => {
    // Remover valor del storage
    localStorage.removeItem("isLoggedIn");

    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        onLogin: loginHandler,
        onLogout: logoutHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
