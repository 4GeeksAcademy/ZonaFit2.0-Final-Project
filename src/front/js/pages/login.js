import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/login.css";
import logo from "../../img/logo.png"

import { Link, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';



export const Login = () => {
    const { store, actions } = useContext(Context);

    const navigate = useNavigate()

    const [mail, setMail] = useState("")
    const [password, setPassword] = useState("")

    const login = async (e) => {
        e.preventDefault()
        if (mail != "" & password != "") {
            let resp = await actions.login(mail, password)
            if (resp) {
                  navigate("/perfil")
            }
        } else {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Faltan completar datos",

            });
        }
    }
    return (
        <div className="container d-flex justify-content-center">



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

                        <form>
                            <div className="mb-5">
                                <label htmlFor="email">Email</label>
                                <input type="email" value={mail} onChange={(e) => setMail(e.target.value)} className="form-control" id="email" placeholder="name@example.com" />
                            </div>
                            <div className=" mb-5">

                                <label htmlFor="password">Contraseña</label>
                                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" id="password" placeholder="*******" />

                            </div>
                            <div className="d-flex justify-content-between align-items-center gap-3" >

                                <Link to={"/registro"} className="btn btn-ghost">Crear cuenta</Link>

                                <button onClick={(e) => login(e)} type="submit" className="btn btn-primary">Iniciar sesión</button>
                            </div>
                        </form>

                        <p className="text-muted">
                            <Link to={"/recordar"}>¿Olvidaste tu contraseña?</Link>

                        </p>


                    </div>
                </div>
            </div>
        </div >
    )
}
