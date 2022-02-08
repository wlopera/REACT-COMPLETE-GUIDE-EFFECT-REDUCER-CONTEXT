import React from "react";

import classes from "./Navigation.module.css";

const Navigation = (props) => {
  return (
    <nav className={classes.nav}>
      <ul>
        {props.isLoggedIn && (
          <li>
            <a href="/">Usuarios</a>
          </li>
        )}
        {props.isLoggedIn && (
          <li>
            <a href="/">Administrador</a>
          </li>
        )}
        {props.isLoggedIn && (
          <li>
            <button onClick={props.onLogout}>Cerrar Sesión</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
