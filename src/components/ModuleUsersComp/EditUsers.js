import axios from "axios";
import React, {useRef, useState, useEffect} from "react";
import {useLocation } from 'react-router-dom';

function EditUsers () {

    const location = useLocation()
    const idUser = location.pathname.split("/").pop()

    const [users, setUsers] = useState([])

    useEffect(() => {
        obtenerDatosUser()
      }, []);

    const obtenerDatosUser = async () => {
        const data = await fetch('https://us-east-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/matrixapp-yjwwm/service/matrix/incoming_webhook/edit?id=' + idUser)
        const saveUsers = await data.json()
        setUsers(saveUsers)
    }

    const handleInputChange = (e) => {
        setUsers({[e.target.name]: e.target.value});
    }

    const form = useRef(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(form.current);
        const dataEditUsers = {
            user_id: idUser,
            dni: formData.get("dni"),
            name: formData.get("name"),
            lastname: formData.get("lastname"),
            email: formData.get("email"),
            perfil: formData.get("perfil"),
            username: formData.get('username'),
            password: formData.get('password')
        }
        console.log(dataEditUsers);
        axios.post('https://us-east-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/matrixapp-yjwwm/service/matrix/incoming_webhook/update', dataEditUsers)
            .then(res => console.log(res.data), alert("Usuario actualizado con éxito"));
    }

    return (
        <main>
            <section>
                <h2 className="subtitle_page" id="createUsers">Creación de nuevos usuarios</h2>
                <p>Para crear un nuevo usuario diligencie el siguiente formulario, asegúrese de llenar todos los campos.</p>
                
                <form ref={form} onSubmit={handleSubmit}>
                    <label htmlFor="dni">
                        <span>Número de documento de identidad:</span>
                        <input type="number" minLength="7"
                                placeholder="Escribe el número de documento"
                                required
                                name="dni"
                                onChange={handleInputChange}
                                value={users.dni}
                                />
                    </label>
                    <label htmlFor="nombre">
                        <span>Nombres:</span>
                        <input type="text" id ="nombre"
                                placeholder="Escribe los nombres"
                                required
                                name="name"
                                onChange={handleInputChange}
                                value={users.name}
                                />
                    </label>
                    <label htmlFor="apellido">
                        <span>Apellidos:</span>
                        <input type="text" id ="apellido"
                                placeholder="Escribe los apellidos"
                                required
                                name="lastname"
                                onChange={handleInputChange}
                                value={users.lastname}
                                />
                    </label>

                    <label htmlFor="email">
                        <span>Correo:</span>
                        <input type="email" id ="email"
                                placeholder="Escribe el correo"
                                required
                                name="email"
                                onChange={handleInputChange}
                                value={users.email}
                                />
                    </label>

                    <label htmlFor="perfil">
                        <span>Perfil:</span>
                        <select name="perfil" id="perfil" required name="perfil" onChange={handleInputChange} value={users.perfil}>
                        <option value="Operario">Operario</option>
                            <option value="Vendedor">Vendedor</option>
                            <option value="Ejecutivo">Ejecutivo</option>
                            <option value="Gerente comercial">Gerente comercial</option>
                            <option value="Director">Director</option>
                            <option value="Administrador">Administrador</option>
                        </select>
                    </label>

                    <label htmlFor="usuario">
                        <span>Nombre de usuario:</span>
                        <input type="text" id ="username"
                                placeholder="Escriba el nombre de usuario"
                                required
                                name="username"
                                onChange={handleInputChange}
                                value={users.username}
                        />
                    </label>
                    <label htmlFor="password">
                        <span>Password:</span>
                        <input type="password" id ="password"
                                placeholder="Asigne un password"
                                required
                                name="password"
                                onChange={handleInputChange}
                                value={users.password}
                        />
                    </label>
                    <input type="submit"/>
                </form>
            </section>
        </main>
    )
};

export {EditUsers};