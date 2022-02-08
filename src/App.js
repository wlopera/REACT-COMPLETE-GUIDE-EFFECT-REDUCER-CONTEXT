import React, { useEffect, useState } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";

function App() {
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
    setIsLoggedIn(false);

    // Remover valor del storage
    localStorage.removeItem("isLoggedIn");
  };

  return (
    <React.Fragment>
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </React.Fragment>
  );
}

export default App;
