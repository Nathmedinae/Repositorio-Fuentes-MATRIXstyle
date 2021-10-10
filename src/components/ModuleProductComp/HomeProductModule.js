import React from "react";
import {NavLink} from "react-router-dom";

function HomeProductModule () {
    return (
        <main>
            <section>
                <nav>
                    <ul>
                        <li><NavLink exact to="/Productos">► Inicio</NavLink></li>
                        <li><NavLink exact to="/Productos/ProductosActivos">► Productos Activos</NavLink></li>
                        <li><NavLink exact to="/Productos/CrearProductos">► Crear Productos</NavLink></li>
                        <li><NavLink exact to="/Productos/ActualizarProductos">► Actualizar Productos</NavLink></li>
                        <li><NavLink id="exit" className="active" exact to="/Productos">Salida</NavLink></li>
                    </ul>
                </nav>
            </section>
        </main>
    )
};

export {HomeProductModule};