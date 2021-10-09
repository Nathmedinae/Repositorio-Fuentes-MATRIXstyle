import React from "react";

function RoleUsersRegister () {
    return (
        <main>
            <h2 class="subtitle_page" id="createRoles">Creación de nuevos roles</h2>
            <p>Para crear un nuevo rol diligencie el siguiente formulario, asegúrese de llenar todos los campos.</p>
            
            <form action="./sucess.html">
                <label for="nombreRol">
                    <span>Nombre del rol:</span>
                    <input type="text" id ="nombreRol" placeholder="Escribe el nuevo tipo de rol" autocomplete="off" required/>
                </label>

                <label for="estado">
                    <span>Estado:</span>
                    <select name="estado" id="estado" autocomplete="off" required>
                        <option value="Activo">Activo</option>
                        <option value="Inactivo">Inactivo</option>
                    </select>
                </label>

                <label for="checkVentas" class="labelCheck">
                    <input class="inputCheck" type="checkbox" name="checkVentas" id="checkVentas" autocomplete="off"/>
                    Módulo de ventas
                </label>

                <label for="checkProductos" class="labelCheck">
                    <input class="inputCheck" type="checkbox" name="checkProductos" id="checkProductos"/>
                    Módulo de productos
                </label>

                <label for="checkUsers" class="labelCheck">
                    <input class="inputCheck" type="checkbox" name="checkUsers" id="checkUsers"/>
                    Módulo de usuarios
                </label>

                <input class="submitButton" type="submit" value="Agregar rol"/>
            </form>
        </main>
    )
};

export {RoleUsersRegister};