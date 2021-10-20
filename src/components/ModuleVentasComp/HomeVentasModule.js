import React from "react";
import {NavLink} from "react-router-dom";

function HomeVentasModule () {
    return (
        <main>
            <section>
                <nav>
                    <ul>
                        <li><NavLink exact to="/MenuPrincipal">► Inicio</NavLink></li>
                        <li><NavLink exact to="/Ventas">► Nueva Venta</NavLink></li>
                        <li><NavLink exact to="/Ventas/Cuenta">► Cuenta</NavLink></li>
                        <li><NavLink exact to="/Ventas/ConsultarVentas">► Consultar Ventas</NavLink></li>
                        <li><NavLink exact to="/Ventas/EditarVentas">► Editar Ventas</NavLink></li>
                        <li><NavLink id="exit" className="active" exact to="/">Salida</NavLink></li>
                    </ul>
                </nav>
            </section>
        </main>
    )
};

export {HomeVentasModule};