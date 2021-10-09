import React from "react";
import editIcon from "../../resources/edit_icon.png";
import trashIcon from "../../resources/trash_icon50px.png";

function RoleUsers () {
    return (
        <main>
                <h2 class="subtitle_page" id="regRoles">Roles registrados</h2>

                <section>
                    <form action="" class="form2">
                        <span>Búsqueda por palabra clave:</span>
                        <label for="searchRoles">
                            <input type="search" id ="searchRoles" placeholder="Escribe una palabra clave" autocomplete="off"/>
                        </label>
                        <input class="submitButton" type="submit" value="Buscar"/>
                    </form>
        
                    <form action="" class="form2">
                        <span>Búsqueda por filtros:</span>
                        <label for="">
                            <span>Permisos:</span>
                            <select name="rol" id="rol" autocomplete="off" required>
                                <option value="modVentas">Módulo de ventas</option>
                                <option value="modProductos">Módulo de productos</option>
                                <option value="modUsers">Módulo de usuarios </option>
                            </select>
                        </label>
                        <label for="">
                            <span>Estado:</span>
                            <select name="perfil" id="perfil" autocomplete="off" required>
                                <option value="activo">Activo</option>
                                <option value="inactivo">Inactivo</option>
                            </select>
                        </label>
                        <input class="submitButton" type="submit" value="Buscar"/>
                    </form>
                </section>

                <table>
                    <tr>
                        <th>Tipo de rol</th>
                        <th>Permisos del usuario</th>
                        <th>Estado</th>
                        <th>Editar</th>
                        <th>Eliminar</th>
                    </tr>
                    <tr>
                        <td>Director</td>
                        <td>Módulo de ventas<br/>Módulo de productos<br/>Módulo de usuarios</td>
                        <td>Activo</td>
                        <td class="table_td_img"><img src={editIcon} alt="Editar"/></td>
                        <td class="table_td_img"><img src={trashIcon} alt="Eliminar"/></td>
                    </tr>
                    <tr>
                        <td>Gerente comercial</td>
                        <td>Módulo de ventas<br/>Módulo de productos<br/>Módulo de usuarios</td>
                        <td>Activo</td>
                        <td class="table_td_img"><img src={editIcon} alt="Editar"/></td>
                        <td class="table_td_img"><img src={trashIcon} alt="Eliminar"/></td>
                    </tr>
                    <tr>
                        <td>Ejecutivo</td>
                        <td>Módulo de ventas<br/>Módulo de productos</td>
                        <td>Activo</td>
                        <td class="table_td_img"><img src={editIcon} alt="Editar"/></td>
                        <td class="table_td_img"><img src={trashIcon} alt="Eliminar"/></td>
                    </tr>
                    <tr>
                        <td>Vendedor</td>
                        <td>Módulo de ventas</td>
                        <td>Activo</td>
                        <td class="table_td_img"><img src={editIcon} alt="Editar"/></td>
                        <td class="table_td_img"><img src={trashIcon} alt="Eliminar"/></td>
                    </tr>
                    <tr>
                        <td>Operario</td>
                        <td>Módulo de productos</td>
                        <td>Inactivo</td>
                        <td class="table_td_img"><img src={editIcon} alt="Editar"/></td>
                        <td class="table_td_img"><img src={trashIcon} alt="Eliminar"/></td>
                    </tr>
                </table>
        </main>
    )
};

export {RoleUsers};