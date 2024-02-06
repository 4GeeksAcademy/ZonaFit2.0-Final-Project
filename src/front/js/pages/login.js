import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/login.css";
import logo from "../../img/logo.png"


export const Login = () => {
    const { store, actions } = useContext(Context);

    return (
        <div className="container">

            <div className="row">
                <div className="col">
                    <div className="logo-container">
                        <img src={logo} alt="logo-zonafit" />
                    </div>
                </div>
            </div>


            <div className="col-md-6 col-lg-4">
                <div className="card my-5">
                    <div className="card-body">

                        <form method="POST" action="/login">
                            <div className="form-floating form-label mb-5">
                                <label for="email">Email</label>
                                <input type="email" className="form-control" id="email" placeholder="name@example.com" />

                            </div>

                            <div className="form-floating form-label mb-5">
                                <label for="password">Contraseña</label>
                                <input type="password" className="form-control" id="password" placeholder="*******" />

                            </div>


                            <div className="d-flex justify-content-between align-items-center gap-3" >

                                <a href="/register.html" className="btn btn-ghost">Crear cuenta</a>
                                <button type="submit" className="btn btn-primary">Iniciar sesión</button>
                            </div>
                        </form>

                        <p className="text-muted"><a href="/remember.html">¿Olvidaste tu contraseña?</a></p>

                    </div>
                </div>
            </div>
        </div >
    )
}
