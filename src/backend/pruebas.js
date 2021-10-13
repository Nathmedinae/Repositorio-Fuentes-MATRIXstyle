// const UsersL = props => (
//     <tr>
//         <td>{props.users.dni}</td>
//         <td>{props.users.name}</td>
//         <td>{props.users.lastname}</td>
//         <td>{props.users.email}</td>
//         <td>{props.users.perfil}</td>
//         <td>{props.users.username}</td>
//         <td>{props.users.password}</td>
//     </tr>
// )

// const [users, setUsers] = useState({
//     dni: "",
//     name: "",
//     lastname: "",
//     email: "",
//     perfil: "",
//     username: "",
//     password:  ""
// });

// useEffect(() => {
//     axios.get('https://us-east-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/matrixapp-yjwwm/service/matrix/incoming_webhook/get')
//         .then(response => setUsers(response.data));
// }, []);

{/* <table>
    <tr>
        <th>Documento de identidad</th>
        <th>Nombres y apellidos</th>
        <th>Correo</th>
        <th>Rol</th>
        <th>Nombre de usuario</th>
        <th>Password</th>
        <th>Estado</th>
        <th>Editar</th>
        <th>Eliminar</th>
    </tr>
    {/* <tr>
        <td>{users.dni}</td>
        <td>{users.name}</td>
        <td>{users.lastname}</td>
        <td>{users.email}</td>
        <td>{users.perfil}</td>
        <td>{users.username}</td>
        <td>{users.password}</td>
    </tr> */}

    {/* <tr>
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
</table> */}



    // function componentDidUpdate() {
    //     axios.get('https://us-east-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/matrixapp-yjwwm/service/matrix/incoming_webhook/get')
    //         .then(response => {
    //             SetState({users: response.data});
    //         })
    //         .catch(function (error) {
    //             console.log(error);
    //         })
    // }

    // axios
    // .get({url})
    // .then( res => {
    //     console.log(res)
    //     setUsers(res.data)
    // })
    // .catch(err => {
    //     console.log(err)
    // })

        // const ListUsers = ((user) =>{
    //     return <tr>
    //                 <td>{user.dni}</td>
    //                 <td>{user.name}</td>
    //                 <td>{user.lastname}</td>
    //                 <td>{user.email}</td>
    //                 <td>{user.perfil}</td>
    //                 <td>{user.username}</td>
    //                 <td>{user.password}</td>
    //             </tr>
    // })

    
    // useEffect(() => {
    //     fetchUsers();
    // }, [])

    // const fetchUsers = () => {
    //     axios
    //         .get({url}, users)
    //         .then(response => {
    //             setUsers(response.data);
    //             console.log(response.data);})
    //         .catch(e => {console.log(e);
    //     });
    // };

    // const userList2 = () => {
    //     return users.map(function (userActual, i) {
    //       return <UsersL user={userActual} key={i}/>
    //     })
    // }

    // useEffect(() => {
    //     const axiosUsers = async () => {
    //       const response = await axios({url});
    //       const userList = response.data;
    //       console.log(userList);

    //       console.log(users);
    //     };
    //     axiosUsers();
    //   }, []);

    
{/* <div>
    <tr>
        {users.map(item => (
                <td key={item._id}>
                    {item.dni} - {item.name} {item.lastname} -
                    {item.email} - {item.perfil} - {item.username} -
                    {item.password}
                    </td>
            ))
        }
    </tr>
</div> */}