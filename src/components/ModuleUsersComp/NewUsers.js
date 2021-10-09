import React from "react";

function NewUsers () {

    const onChangeInput = (msg) => {
        alert(msg);
    };
    return (
        <main>
            <section>
                <h2 className="subtitle_page" id="createUsers">Creación de nuevos usuarios</h2>
                <p>Para crear un nuevo usuario diligencie el siguiente formulario, asegúrese de llenar todos los campos.</p>
                
                <form action="./sucess.html">
                    <label htmlFor="dni">
                        <span>Número de documento de identidad:</span>
                        <input type="number" id ="dni" min="7"
                                placeholder="Escribe el número de documento"
                                required
                                onChange={()=> onChangeInput("DNI")}
                                />
                    </label>
                    <label htmlFor="nombre">
                        <span>Nombres:</span>
                        <input type="text" id ="nombre" placeholder="Escribe los nombres" required/>
                    </label>
                    <label htmlFor="apellido">
                        <span>Apellidos:</span>
                        <input type="text" id ="apellido" placeholder="Escribe los apellidos" required/>
                    </label>

                    <label htmlFor="email">
                        <span>Correo:</span>
                        <input type="email" id ="email" placeholder="Escribe el correo" required/>
                    </label>
                    <label htmlFor="perfil">
                        <span>Perfil:</span>
                        <select name="perfil" id="perfil" required>
                            <option value="Coordinador de ventas">Operario</option>
                            <option value="Administrador">Vendedor</option>
                            <option value="Ejecutivo de ventas">Ejecutivo</option>
                            <option value="Coordinador de ventas">Gerente comercial</option>
                            <option value="Coordinador de ventas">Director</option>
                            <option value="Analista de ventas">Administrador</option>
                        </select>
                    </label>
                    <label htmlFor="usuario">
                        <span>Nombre de usuario:</span>
                        <input type="text" id ="username" placeholder="Escriba el nombre de usuario" required/>
                    </label>
                    <label htmlFor="password">
                        <span>Password:</span>
                        <input type="password" id ="password" placeholder="Asigne un password" required/>
                    </label>
                    <input className="submitButton" type="submit" value="Agregar usuario"/>
                </form>
            </section>
        </main>
    )
};

export {NewUsers};