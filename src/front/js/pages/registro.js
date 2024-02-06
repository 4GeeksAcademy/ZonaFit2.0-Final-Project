
import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/registro.css";
import logo from "../../img/logo.png"


export const Registro = () => {
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

                        <form method="POST" action="/signup">
                            <div className="form-floating mb-3">
                                <label for="name">Nombre</label>
                                <input type="name" className="form-control" id="name" placeholder="Nepomuceno Alberto" />
                            </div>


                            <div className="form-floating mb-3">
                                <label for="lastname">Apellido</label>
                                <input type="lastname" className="form-control" id="lastname" placeholder="Nepomuceno Alberto" />
                            </div>


                            <div className="form-floating mb-3">
                                <label for="email">Email</label>
                                <input type="email" className="form-control" id="email" placeholder="name@example.com" />
                            </div>


                            <div className="form-floating mb-3">
                                <label for="password">Contraseña</label>
                                <input type="password" className="form-control" id="password" placeholder="*****" />
                            </div>

                            <div className="form-floating mb-3">
                                <label for="confirm-password">Confirmar Contraseña</label>
                                <input type="confirm-password" className="form-control" id="confirm-password" placeholder="*****" />
                            </div>


                            <div className="d-flex justify-content-between align-items-center gap-3" >


                                <a href="/login.html" className="btn btn-ghost">Ya tengo cuenta</a>
                                <button type="submit" className="btn btn-primary">Registrarse</button>
                            </div>
                        </form>




                    </div>
                </div>
            </div>
        </div >

    )
}

{/* <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0-alpha1/js/bootstrap.min.js" integrity="sha512-eKXO1Cj59hDGYI6vHJ87j6vXW8TP+G3ZzqWtW8Wx8zTKD065W8WgGK3k8U4z8KEvZ6WBzWfW+KyQMlXyu3oUg==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
</body> */}