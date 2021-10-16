import React, {useState, useEffect, Fragment} from "react";
import { Link } from 'react-router-dom';

function RoleUsers () {

    const [roles, setRoles] = useState([]);

    useEffect(() => {
        obtenerDatos()
      }, []);

    const obtenerDatos = async () => {
        const data = await fetch('https://us-east-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/matrixroles-rqcbf/service/matrixRoles/incoming_webhook/get');
        const saveRoles = await data.json();
        setRoles(saveRoles)
    }

    return (
        <Fragment>
            <main>
                    <h2 class="subtitle_page">Roles registrados</h2>

                    <section>
                        <form class="form2">
                            <span>Búsqueda por palabra clave:</span>
                            <label for="searchRoles">
                                <input type="search" placeholder="Escribe una palabra clave" required autoComplete="off"/>
                            </label>
                            <input class="submitButton" type="submit" value="Buscar"/>
                        </form>
            
                        <form class="form2">
                            <span>Búsqueda por filtros:</span>
                            <label>
                                <span>Permisos:</span>
                                <select name="rol" autoComplete="off" required>
                                    <option value="modVentas">Módulo de ventas</option>
                                    <option value="modProductos">Módulo de productos</option>
                                    <option value="modUsers">Módulo de usuarios </option>
                                </select>
                            </label>
                            <label>
                                <span>Estado:</span>
                                <select name="perfil" autoComplete="off" required>
                                    <option value="activo">Activo</option>
                                    <option value="inactivo">Inactivo</option>
                                </select>
                            </label>
                            <input class="submitButton" type="submit" value="Buscar"/>
                        </form>
                    </section>

                    <tbody>
                        <table>
                            <tr>
                                <th>Tipo de rol</th>
                                <th>Permisos del usuario</th>
                                <th>Editar</th>
                                <th>Eliminar</th>
                            </tr>

                            {roles.map((item, i) => (<tr>
                                                    <td key={i}>{item.nombreRol}<br/></td>
                                                    <td key={i}>{item.checkVentas == null ? "Módulo de ventas: INHABILITADO" : " Módulo de ventas: HABILITADO"}<br/>
                                                                {item.checkProductos == null ? "Módulo de productos: INHABILITADO" : " Módulo de productos: HABILITADO"}<br/>
                                                                {item.checkUsers == null ? "Módulo de usuarios: INHABILITADO" : " Módulo de usuarios: HABILITADO"}</td>
                                                    <td key={i}><Link to={"/Usuarios/EditarRoles/" + item._id}>Editar</Link></td>
                                                    <td key={i}><Link to={"/Usuarios/BorrarRoles/" + item._id}>Eliminar</Link></td>
                                                </tr>       
                        ))}
                        </table>
                    </tbody>
            </main>
        </Fragment>
    )
};

export {RoleUsers};