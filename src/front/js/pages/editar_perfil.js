import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/editar_perfil.css";
import logo from "../../img/logo.png"


export const Editar_perfil = () => {
    const { store, actions } = useContext(Context);

    return (
        <div className="container">
            <div className="logo-container">
            </div>
            <div className="card my-5">
                <div className="card-body">
                    <h2 className="text-center">Editar perfil</h2>
                    <form method="POST" action="/editar-perfil">
                        <div className="form-group mb-3">
                            <label htmlFor="nombre">Nombre completo</label>
                            <input type="text" className="form-control" id="nombre" placeholder="Nombre completo" />
                        </div>
                        <div className="form-group mb-3">
                            <label htmlFor="email">Correo electrónico</label>
                            <input type="email" className="form-control" id="email" placeholder="Correo electrónico" />
                        </div>

                        <div className="form-group mb-3">
                            <label htmlFor="password">Contraseña actual</label>
                            <input type="password" className="form-control" id="password" placeholder="Contraseña actual" />
                        </div>
                        <div className="form-group mb-3">
                            <label htmlFor="password">Contraseña actual</label>
                            <input type="password" className="form-control" id="password" placeholder="Contraseña actual" />
                        </div>
                        <div className="form-group mb-3">
                            <label htmlFor="nueva-password">Nueva contraseña</label>
                            <input type="password" className="form-control" id="nueva-password" placeholder="Nueva contraseña" />
                        </div>

                        <div className="d-flex justify-content-center mt-4">
                            <button type="submit" className="btn btn-primary">Guardar cambios</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )

}