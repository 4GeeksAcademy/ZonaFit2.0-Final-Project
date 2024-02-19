
import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/registro.css";
import logo from "../../img/logo.png"
import { Link, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';



export const Registro = () => {
    const { store, actions } = useContext(Context);
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmar, setConfirmar] = useState("")
    const navigation = useNavigate()

    const registrarse = async (e) => {
        e.preventDefault()
        if (nombre != "" & apellido != "" & email != "" & password != "" & confirmar != "") {
            if (password == confirmar) {
                const rsp = await actions.registrarse(nombre, apellido, email, password)
                if (rsp) {
                    navigation("/login")
                }
            } else {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Las contraseñas no coinciden",

                });
            }
        } else {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Faltan datos",

            });
        }
    }

    return (

        <div className="mt-5 pt-5 container d-flex justify-content-center">
            <div className="row">
                <div className="col">
                    <div className="logo-container d-flex justify-content-center">
                        <img src={logo} alt="logo-zonafit" />
                    </div>
                </div>
            </div>
            <div className="col-md-6 col-lg-4">
                <div className="card my-5">
                    <div className="card-body">

                        <form>
                            
                            <div className="mb-3">
                                <label htmlFor="name">Nombre</label>
                                <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} className="form-control" id="name" placeholder="Nepomuceno Alberto" />
                            </div>


                            <div className="mb-3">
                                <label htmlFor="lastname">Apellido</label>
                                <input type="text" value={apellido} onChange={(e) => setApellido(e.target.value)} className="form-control" id="lastname" placeholder="Nepomuceno Alberto" />
                            </div>


                            <div className="mb-3">
                                <label htmlFor="email">Email</label>
                                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" id="email" placeholder="name@example.com" />
                            </div>


                            <div className=" mb-3">
                                <label htmlFor="password">Contraseña</label>
                                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" id="password" placeholder="*****" />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="confirm-password">Confirmar Contraseña</label>
                                <input type="password" value={confirmar} onChange={(e) => setConfirmar(e.target.value)} className="form-control" id="confirm-password" placeholder="*****" />
                            </div>


                            <div className="d-flex justify-content-between align-items-center gap-3" >

                                <Link to={"/login"} className="btn btn-ghost">Ya tengo cuenta</Link>

                                <button type="submit" className="btn btn-primary" onClick={(e) => registrarse(e)}>Registrarse</button>
                            </div>
                        </form>




                    </div>
                </div>
            </div>
            {/* <ToastContainer /> */}
        </div >

    )
}
