import React from "react";
import {Link, NavLink} from "react-router-dom";
import statics from "../../resources/pinterest-statistics-02.png"
import {InitialSesion} from "../InitialSesion";

function HomeUsersModule () {
    return (
        <main>
            <section>
                <nav>
                    <ul>
                        <li><NavLink exact to="/Usuarios/NuevosUsuarios">► Gestión de usuarios</NavLink></li>
                        <li><NavLink exact to="/Usuarios/NuevosRoles">► Gestión de roles</NavLink></li>
                        <li><NavLink id="exit" className="active" exact to={InitialSesion}>Salida segura</NavLink></li>
                    </ul>
                </nav>
            </section>

            <section>
                <figure>
                    <h2 class="subtitle_page">Actividad mensual de los usuarios</h2>
                    <img src={statics}/>
                    <span>Fuente: https://blog.hootsuite.com/</span>
                </figure>
            </section>
        </main>
    )
};

export {HomeUsersModule};