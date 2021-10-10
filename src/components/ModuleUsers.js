import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import { GraphicHomeUsers } from "./ModuleUsersComp/GraphicHomeUsers";
import { HomeUsersModule } from "./ModuleUsersComp/HomeUsersModule";
import { NewUsers } from "./ModuleUsersComp/NewUsers";
import { OldUsers } from "./ModuleUsersComp/OldUsers";
import { RoleUsers } from "./ModuleUsersComp/RoleUsers";
import { RoleUsersRegister } from "./ModuleUsersComp/RoleUsersRegister";

function ModuleUsers () {
    return (
        <BrowserRouter>
            <HomeUsersModule />
            <Switch>
                <Route exact path="/Usuarios" component={GraphicHomeUsers}/>
                <Route exact path="/Usuarios/NuevosUsuarios" component={NewUsers}/>
                <Route exact path="/Usuarios/UsuariosRegistrados" component={OldUsers}/>
                <Route exact path="/Usuarios/NuevosRoles" component={RoleUsersRegister}/>
                <Route exact path="/Usuarios/RolesRegistrados" component={RoleUsers}/>
                <Route path="*" component={<h1>Error 404</h1>}/>
            </Switch>
        </BrowserRouter>
    )
};

export {ModuleUsers};