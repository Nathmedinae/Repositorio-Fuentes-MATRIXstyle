import React from "react";

function RoleUsersRegister () {
    return (
        <main>
            <h2 className="subtitle_page" id="createRoles">Creación de nuevos roles</h2>
            <p>Para crear un nuevo rol diligencie el siguiente formulario, asegúrese de llenar todos los campos.</p>
            
            <form>
                <label for="nombreRol">
                    <span>Nombre del rol:</span>
                    <input type="text" id ="nombreRol" placeholder="Escribe el nuevo tipo de rol" autoComplete="off" required/>
                </label>

                <label for="estado">
                    <span>Estado:</span>
                    <select name="estado" id="estado" autoComplete="off" required>
                        <option value="Activo">Activo</option>
                        <option value="Inactivo">Inactivo</option>
                    </select>
                </label>

                <label for="checkVentas" className="labelCheck">
                    <input className="inputCheck" type="checkbox" name="checkVentas" id="checkVentas" autoComplete="off"/>
                    Módulo de ventas
                </label>

                <label for="checkProductos" className="labelCheck">
                    <input className="inputCheck" type="checkbox" name="checkProductos" id="checkProductos"/>
                    Módulo de productos
                </label>

                <label for="checkUsers" className="labelCheck">
                    <input className="inputCheck" type="checkbox" name="checkUsers" id="checkUsers"/>
                    Módulo de usuarios
                </label>

                <input className="submitButton" type="submit" value="Agregar rol"/>
            </form>
        </main>
    )
};

export {RoleUsersRegister};