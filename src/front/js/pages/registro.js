
import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/registro.css";
import logo from "../../img/logo.png"
import { useNavigate } from "react-router-dom";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';


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
                // toast('🦄 Contraseña erronea!', {
                //     position: "top-right",
                //     autoClose: 5000,
                //     hideProgressBar: false,
                //     closeOnClick: true,
                //     pauseOnHover: true,
                //     draggable: true,
                //     progress: undefined,
                //     theme: "light",
                //     transition: Bounce,
                // });
            }
        } else {
            console.log("Faltan datos")
        }
    }

    return (

        <div className="container d-flex justify-content-center">


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
                            <div className="form-floating mb-3">
                                <label for="name">Nombre</label>
                                <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} className="form-control" id="name" placeholder="Nepomuceno Alberto" />
                            </div>


                            <div className="form-floating mb-3">
                                <label for="lastname">Apellido</label>
                                <input type="text" value={apellido} onChange={(e) => setApellido(e.target.value)} className="form-control" id="lastname" placeholder="Nepomuceno Alberto" />
                            </div>


                            <div className="form-floating mb-3">
                                <label for="email">Email</label>
                                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" id="email" placeholder="name@example.com" />
                            </div>


                            <div className="form-floating mb-3">
                                <label for="password">Contraseña</label>
                                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" id="password" placeholder="*****" />
                            </div>

                            <div className="form-floating mb-3">
                                <label for="confirm-password">Confirmar Contraseña</label>
                                <input type="password" value={confirmar} onChange={(e) => setConfirmar(e.target.value)} className="form-control" id="confirm-password" placeholder="*****" />
                            </div>


                            <div className="d-flex justify-content-between align-items-center gap-3" >


                                <a href="/login.html" className="btn btn-ghost">Ya tengo cuenta</a>
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
