import React, {useState, useRef} from "react";

function NewUsers () {

    const form = useRef(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(form.current);
        const data = {
            dni: formData.get("dni"),
            name: formData.get("name"),
            lastname: formData.get("lastname"),
            email: formData.get("email"),
            perfil: formData.get("perfil"),
            usename: formData.get('email'),
            password: formData.get('password')
        }
        console.log(data);
    }


    
    return (
        <main>
            <section>
                <h2 className="subtitle_page" id="createUsers">Creación de nuevos usuarios</h2>
                <p>Para crear un nuevo usuario diligencie el siguiente formulario, asegúrese de llenar todos los campos.</p>
                
                <form ref={form}>
                    <label htmlFor="dni">
                        <span>Número de documento de identidad:</span>
                        <input type="number" min="7"
                                placeholder="Escribe el número de documento"
                                required
                                name="dni"
                                // onChange={handleInputChange}
                                />
                    </label>
                    <label htmlFor="nombre">
                        <span>Nombres:</span>
                        <input type="text" id ="nombre"
                                placeholder="Escribe los nombres"
                                required
                                name="name"
                                // onChange={handleInputChange}
                                />
                    </label>
                    <label htmlFor="apellido">
                        <span>Apellidos:</span>
                        <input type="text" id ="apellido"
                                placeholder="Escribe los apellidos"
                                required
                                name="lastname"
                                // onChange={handleInputChange}
                                />
                    </label>

                    <label htmlFor="email">
                        <span>Correo:</span>
                        <input type="email" id ="email"
                                placeholder="Escribe el correo"
                                required
                                name="email"
                                // onChange={handleInputChange}
                                />
                    </label>

                    <label htmlFor="perfil">
                        <span>Perfil:</span>
                        <select name="perfil" id="perfil" required name="perfil">
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
                        <input type="text" id ="username"
                                placeholder="Escriba el nombre de usuario"
                                required
                                name="username"
                                // onChange={handleInputChange}
                        />
                    </label>
                    <label htmlFor="password">
                        <span>Password:</span>
                        <input type="password" id ="password"
                                placeholder="Asigne un password"
                                required
                                name="password"
                                // onChange={handleInputChange}
                        />
                    </label>
                    <input type="submit" onClick={handleSubmit}/>
                </form>
            </section>
        </main>
    )
};

export {NewUsers};