import React, {useState, useEffect, Fragment} from "react";
import { Link } from 'react-router-dom';
// import editIcon from "../../resources/edit_icon.png";
// import trashIcon from "../../resources/trash_icon50px.png";

function OldUsers () {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        obtenerDatos()
      }, []);

    const obtenerDatos = async () => {
        const data = await fetch('https://us-east-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/matrixapp-yjwwm/service/matrix/incoming_webhook/get');
        const saveUsers = await data.json();
        setUsers(saveUsers)
    }

    return (
        <Fragment>
        <main>
            <h2 className="subtitle_page">Usuarios registrados</h2>


            {/* <form action="" className="form2">
                <span>Búsqueda por palabra clave:</span>
                <label for="">
                    <input type="search" id ="searchUsers" placeholder="Escribe una palabra clave"/>
                </label>
                <input className="submitButton" type="submit" value="Buscar"/>
            </form> */}

            {/* <form action="" className="form2">
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
                    <select name="perfil" id="perfil" required>
                        <option value="activo">Activo</option>
                        <option value="inactivo">Inactivo</option>
                    </select>
                </label>
                <input className="submitButton" type="submit" value="Buscar"/>
            </form> */}

            <div/>
                <tr>
                    <th>Documento de identidad</th>
                    <th>Nombres y apellidos</th>
                    <th>Correo</th>
                    <th>Rol</th>
                    <th>Nombre de usuario</th>
                    <th>Password</th>
                    <th>Editar</th>
                    <th>Eliminar</th>
                </tr>
               
                {users.map(item => (<tr>
                                        <td key={item._id}>{item.dni}<br/></td>
                                        <td key={item._id}>{item.name} {item.lastname}<br/></td>
                                        <td key={item._id}>{item.email}</td>
                                        <td key={item._id}>{item.perfil}</td>
                                        <td key={item._id}>{item.username}</td>
                                        <td key={item._id}>{item.password}</td>
                                        <td key={item._id}><Link to={"/Usuarios/EditarUsuarios/" + item._id}>Editar</Link></td>
                                        <td key={item._id}><Link to={"/Usuarios/BorrarUsuarios/" + item._id}>Eliminar</Link></td>
                                    </tr>       
                ))}
            <div/>
        </main>

        </Fragment>

    )
};

export {OldUsers};