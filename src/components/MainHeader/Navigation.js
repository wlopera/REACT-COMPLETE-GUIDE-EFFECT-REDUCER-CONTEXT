import React, { useContext } from "react";
import AuthContext from "../store/auth-context";

import classes from "./Navigation.module.css";

const Navigation = () => {
  // return (
  // <AuthContext.Consumer>
  //   {(ctx) => {
  //     return (
  //       <nav className={classes.nav}>
  //         <ul>
  //           {ctx.isLoggedIn && (
  //             <li>
  //               <a href="/">Usuarios</a>
  //             </li>
  //           )}
  //           {ctx.isLoggedIn && (
  //             <li>
  //               <a href="/">Administrador</a>
  //             </li>
  //           )}
  //           {ctx.isLoggedIn && (
  //             <li>
  //               <button onClick={props.onLogout}>Cerrar Sesión</button>
  //             </li>
  //           )}
  //         </ul>
  //       </nav>
  //     );
  //   }}
  // </AuthContext.Consumer>

  const ctx = useContext(AuthContext);

  return (
    <nav className={classes.nav}>
      <ul>
        {ctx.isLoggedIn && (
          <li>
            <a href="/">Usuarios</a>
          </li>
        )}
        {ctx.isLoggedIn && (
          <li>
            <a href="/">Administrador</a>
          </li>
        )}
        {ctx.isLoggedIn && (
          <li>
            <button onClick={ctx.onLogout}>Cerrar Sesión</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
