import React from "react";

function NewUsers () {
    return (
        <main>
            <section>
                <h2 className="subtitle_page" id="createUsers">Creación de nuevos usuarios</h2>
                <p>Para crear un nuevo usuario diligencie el siguiente formulario, asegúrese de llenar todos los campos.</p>
                
                <form action="./sucess.html">
                    <label for="dni">
                        <span>Número de documento de identidad:</span>
                        <input type="number" id ="dni" min="7" placeholder="Escribe el número de documento" autocomplete="off" required/>
                    </label>
                    <label for="nombre">
                        <span>Nombres:</span>
                        <input type="text" id ="nombre" placeholder="Escribe los nombres" autocomplete="off" required/>
                    </label>
                    <label for="apellido">
                        <span>Apellidos:</span>
                        <input type="text" id ="apellido" placeholder="Escribe los apellidos" autocomplete="off" required/>
                    </label>

                    <label for="email">
                        <span>Correo:</span>
                        <input type="email" id ="email" placeholder="Escribe el correo" autocomplete="off" required/>
                    </label>
                    <label for="perfil">
                        <span>Perfil:</span>
                        <select name="perfil" id="perfil" autocomplete="off" required>
                            <option value="Coordinador de ventas">Operario</option>
                            <option value="Administrador">Vendedor</option>
                            <option value="Ejecutivo de ventas">Ejecutivo</option>
                            <option value="Coordinador de ventas">Gerente comercial</option>
                            <option value="Coordinador de ventas">Director</option>
                            <option value="Analista de ventas">Administrador</option>
                        </select>
                    </label>
                    <label for="usuario">
                        <span>Nombre de usuario:</span>
                        <input type="text" id ="username" placeholder="Escriba el nombre de usuario" autocomplete="off" required/>
                    </label>
                    <label for="password">
                        <span>Password:</span>
                        <input type="password" id ="password" placeholder="Asigne un password" autocomplete="off" required/>
                    </label>
                    <input className="submitButton" type="submit" value="Agregar usuario"/>
                </form>
            </section>
        </main>
    )
};

export {NewUsers};