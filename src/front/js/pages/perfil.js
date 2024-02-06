import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/perfil.css";
import logo from "../../img/logo.png"


export const Perfil = () => {
    const { store, actions } = useContext(Context);

    return (
        <div className="container">
            <div className="logo-container">
            </div>
            <div className="card my-5">
                <div className="card-body">
                    <h1 className="text-center">Perfil de usuario</h1>
                    <img src="https://placehold.it/150x150" className="rounded-circle img-thumbnail mx-auto d-block mt-4" alt="Foto de perfil" />
                    <p className="text-center mt-3">Nombre: <strong>Pedro Pérez</strong></p>
                    <p className="text-center">Correo electrónico: <strong>pedroperez76j@gmail.com</strong></p>
                    <div className="d-flex justify-content-center gap-3 mt-4">
                        <a href="editar_perfil.js" className="btn btn-primary">Editar perfil</a>
                        <a href="logout.html" className="btn btn-ghost">Salir de cuenta</a>
                    </div>
                </div>
            </div>
        </div>
    )

}