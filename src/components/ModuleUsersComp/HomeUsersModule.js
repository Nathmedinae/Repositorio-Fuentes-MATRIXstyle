import React from "react";
import {Link, NavLink} from "react-router-dom";

function HomeUsersModule () {
    return (
        <main>
            <section>
                <nav>
                    <ul>
                        <li><NavLink exact to="/Usuarios">► Actividad</NavLink></li>
                        <li><NavLink exact to="/Usuarios/NuevosUsuarios">► Gestión de usuarios</NavLink></li>
                        <li><NavLink exact to="/Usuarios/NuevosRoles">► Gestión de roles</NavLink></li>
                        <li><NavLink id="exit" className="active" exact to="/">Salida segura</NavLink></li>
                    </ul>
                </nav>
            </section>
        </main>
    )
};

export {HomeUsersModule};