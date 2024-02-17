import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/perfil.css";
import logo from "../../img/logo.png"
import { Link, useNavigate } from "react-router-dom";


export const Perfil = () => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate();

    useEffect(() => {
        if (store.auth === false) navigate('/')
    }, [])


    function logout() {
        actions.logout()
        navigate("/")
    }

    console.log(store.usuario)
    return (
        <div className="container mt-5 pt-5">
            <div className="logo-container">
            </div>
            <div className="card my-5">
                <div className="card-body">
                    <h1 className="text-center">Perfil de usuario</h1>
                    <img src="https://placehold.it/150x150" className="rounded-circle img-thumbnail mx-auto d-block mt-4" alt="Foto de perfil" />
                    <p className="text-center mt-3">Nombre: <strong>{store.usuario.first_name} {store.usuario.last_name}</strong></p>
                    <p className="text-center">Membresia <strong>{store.usuario.is_premium ? "Premium" :"Gratuita"}</strong></p>
                    <p className="text-center">Correo electrónico: <strong>{store.usuario.email}</strong></p>
                    <div className="d-flex justify-content-center gap-3 mt-4">
                        <Link to={"/editar_perfil/" + store.usuario.id} className="btn btn-primary">Editar perfil</Link>
                        <button className="btn btn-ghost" onClick={logout}>Salir de cuenta</button>
                    </div>
                </div>
            </div>
        </div>
    )

}