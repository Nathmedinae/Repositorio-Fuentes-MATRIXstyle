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
                <Route exact path="/Usuarios">
                    <GraphicHomeUsers />
                </Route>
                <Route exact path="/Usuarios/NuevosUsuarios">
                    <NewUsers />
                </Route>
                <Route exact path="/Usuarios/UsuariosRegistrados">
                    <OldUsers />
                </Route>
                <Route exact path="/Usuarios/NuevosRoles">
                    <RoleUsersRegister />
                </Route>
                <Route exact path="/Usuarios/RolesRegistrados">
                    <RoleUsers />
                </Route>
                <Route path="*">
                    <h1>Error 404</h1>
                </Route>
            </Switch>
        </BrowserRouter>
    )
};

export {ModuleUsers};