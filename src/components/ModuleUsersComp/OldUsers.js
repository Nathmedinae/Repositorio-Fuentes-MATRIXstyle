import React from "react";
import editIcon from "../../resources/edit_icon.png";
import trashIcon from "../../resources/trash_icon50px.png";

function OldUsers () {
    return (
        <main>
            <h2 id="regUsers"className="subtitle_page">Usuarios registrados</h2>
            <form action="" className="form2">
                <span>Búsqueda por palabra clave:</span>
                <label for="">
                    <input type="search" id ="searchUsers" placeholder="Escribe una palabra clave" autocomplete="off"/>
                </label>
                <input className="submitButton" type="submit" value="Buscar"/>
            </form>

            <form action="" className="form2">
                <span>Búsqueda por filtros:</span>
                <label for="">
                    <span>Rol:</span>
                    <select name="rol" id="rol" autocomplete="off" required>
                        <option value="Coordinador de ventas">Operario</option>
                        <option value="Administrador">Vendedor</option>
                        <option value="Ejecutivo de ventas">Ejecutivo</option>
                        <option value="Coordinador de ventas">Gerente comercial</option>
                        <option value="Coordinador de ventas">Director</option>
                        <option value="Analista de ventas">Administrador</option>
                    </select>
                </label>
                <label for="">
                    <span>Estado:</span>
                    <select name="perfil" id="perfil" autocomplete="off" required>
                        <option value="activo">Activo</option>
                        <option value="inactivo">Inactivo</option>
                    </select>
                </label>
                <input className="submitButton" type="submit" value="Buscar"/>
            </form>
            <h3>Lista de usuarios registrados</h3>
            <table>
                <tr>
                    <th>Nombres y apellidos</th>
                    <th>Nombre de usuario</th>
                    <th>Correo</th>
                    <th>Rol</th>
                    <th>Estado</th>
                    <th>Editar</th>
                    <th>Eliminar</th>
                </tr>
                <tr>
                    <td>Luz Helena Porras</td>
                    <td>luzhporras</td>
                    <td>luzhporras@matrixstyle.com</td>
                    <td>Director</td>
                    <td>Activo</td>
                    <td className="table_td_img"><img src={editIcon} alt="Editar"/></td>
                    <td className="table_td_img"><img src={trashIcon} alt="Eliminar"/></td>
                </tr>
                <tr>
                    <td>Nathalia Medina</td>
                    <td>natahaliamedina</td>
                    <td>natahaliamedina@matrixstyle.com</td>
                    <td>Gerente comercial</td>
                    <td>Activo</td>
                    <td className="table_td_img"><img src={editIcon} alt="Editar"/></td>
                    <td className="table_td_img"><img src={trashIcon} alt="Eliminar"/></td>
                </tr>
                <tr>
                    <td>John Edisson Merchán López</td>
                    <td>johnemerchan</td>
                    <td>johnemerchan@matrixstyle.com</td>
                    <td>Ejecutivo</td>
                    <td>Activo</td>
                    <td className="table_td_img"><img src={editIcon} alt="Editar"/></td>
                    <td className="table_td_img"><img src={trashIcon} alt="Eliminar"/></td>
                </tr>
                <tr>
                    <td>Juan Sebastián Gaviria Medina</td>
                    <td>juansgaviria</td>
                    <td>juansgaviria@matrixstyle.com</td>
                    <td>Vendedor</td>
                    <td>Activo</td>
                    <td className="table_td_img"><img src={editIcon} alt="Editar"/></td>
                    <td className="table_td_img"><img src={trashIcon} alt="Eliminar"/></td>
                </tr>
                <tr>
                    <td>Alveiro Javier Bueno Aguirre</td>
                    <td>alveirojbueno</td>
                    <td>alveirojbueno@matrixstyle.com</td>
                    <td>Operario</td>
                    <td>Activo</td>
                    <td className="table_td_img"><img src={editIcon} alt="Editar"/></td>
                    <td className="table_td_img"><img src={trashIcon} alt="Eliminar"/></td>
                </tr>
            </table>
        </main>
    )
};

export {OldUsers};