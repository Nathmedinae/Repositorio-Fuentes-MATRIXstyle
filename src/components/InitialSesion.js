import React from "react";

function InitialSesion () {
    return (
        <main>
            <section>
                <h2 className="subtitle_page">Inicio de sesión</h2>
                <p>Ingrese sus datos para iniciar sesión en el módulo de gestión de usuarios:</p>

                <form action="/MenuPrincipal" onsubmit="return()">
                    <label for="usuarioLabel">
                        <span>Usuario:</span>
                        <input type="text" id ="usuario" placeholder="Escribe tu nombre de usuario" autoComplete="username" required/>
                    </label>
                    <label for="passwordLabel">
                        <span>Contraseña:</span>
                        <input type="password" id ="password" placeholder="Escribe tu password" autoComplete="current-password" required/>
                    </label>
                        <input class="submitButton" type="submit" value="Ingresar"/>
                </form>
            </section>
        </main>
    )
};

export {InitialSesion};