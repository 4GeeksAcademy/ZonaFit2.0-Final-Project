import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/perfil.css";
import logo from "../../img/logo.png"


export const Perfil = () => {
    const { store, actions } = useContext(Context);

    return (
        <div class="container">
            <h1>Perfil de usuario</h1>
            <img src="https://placehold.it/150x150" class="rounded-circle img-thumbnail" alt="Foto de perfil" />
            <p>Nombre: <strong>Pedro Pérez</strong></p>
            <p>Correo electrónico: <strong>pedroperez76j@gmail.com</strong></p>
            <a href="logout.html" class="btn btn-danger">Salir de cuenta</a>
        </div>

    )

}