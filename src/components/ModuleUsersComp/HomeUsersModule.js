import React from "react";
import {Link, NavLink} from "react-router-dom";

function HomeUsersModule () {
    return (
        <main>
            <section>
                <nav>
                    <ul>
                        <li><NavLink exact to="/Usuarios">► Inicio</NavLink></li>
                        <li><NavLink exact to="/Usuarios/NuevosUsuarios">► Nuevos usuarios</NavLink></li>
                        <li><NavLink exact to="/Usuarios/UsuariosRegistrados">► Usuarios registrados</NavLink></li>
                        <li><NavLink exact to="/Usuarios/NuevosRoles">► Nuevos roles</NavLink></li>
                        <li><NavLink exact to="/Usuarios/RolesRegistrados">► Roles registrados</NavLink></li>
                        <li><NavLink id="exit" className="active" exact to="/Usuarios">Salida</NavLink></li>
                    </ul>
                </nav>
            </section>
        </main>
    )
};

export {HomeUsersModule};