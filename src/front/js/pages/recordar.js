import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/recordar.css";
import logo from "../../img/logo.png"


export const Recordar = () => {
    const { store, actions } = useContext(Context);

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 col-lg-4">
                    <div className="card">
                        <div className="card-body">
                            <h2>Recordar contraseña</h2>
                            <p>Ingresa tu correo electrónico para recibir un enlace para restablecer tu contraseña.</p>

                            <form method="POST" action="/api/recuperar-contrasena">
                                <div className="form-floating mb-4">
                                    <label for="email">Correo electrónico</label>
                                    <input type="email" className="form-control" id="email" placeholder="name@example.com" />
                                </div>

                                <a href="/login.html" className="btn btn-ghost mb-4">Volver a Inicio de sesión</a>

                                <button type="submit" className="btn btn-primary">Recordar contraseña</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}