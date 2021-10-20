import React from "react";
import {NavLink, Link, Redirect} from "react-router-dom";

function HomeUsersModule () {

    const menuP = () => {
        return <Redirect to="/MenuPrincipal" />
    } 


    return (
        <main>
            <section>
                <nav>
                    <ul>
                        <li><Link exact to="/MenuPrincipal">► Inicio</Link></li>
                        <li><NavLink exact to="/Usuarios/NuevosUsuarios">► Nuevos usuarios</NavLink></li>
                        <li><NavLink exact to="/Usuarios/UsuariosRegistrados">► Usuarios registrados</NavLink></li>
                        <li><NavLink exact to="/Usuarios/NuevosRoles">► Nuevos roles</NavLink></li>
                        <li><NavLink exact to="/Usuarios/RolesRegistrados">► Roles registrados</NavLink></li>
                        <li><Link id="exit" className="active" exact to="/">Salida</Link></li>
                    </ul>
                </nav>
            </section>
        </main>
    )
};

export {HomeUsersModule};