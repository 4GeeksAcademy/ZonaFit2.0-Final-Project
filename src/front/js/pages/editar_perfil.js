import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/editar_perfil.css";
import logo from "../../img/logo.png"
import { useParams } from "react-router-dom";


export const Editar_perfil = () => {
    const { store, actions } = useContext(Context);
    const { id } = useParams()

    const [nombre, setNombre] = useState(store.perfil?.first_name)
    const [apellido, setApellido] = useState("")
    const [genero, setGenero] = useState("")
    const [email, setEmail] = useState("")
    const [birthdate, setBirthdate] = useState("")
    const [peso, setPeso] = useState("")
    const [altura, setAltura] = useState("")
    const [meta, setMeta] = useState("")
    const [password, setPassword] = useState("")
    const [new_password, setNew_password] = useState("")

    useEffect(() => {
        actions.obtenerUsuario(id)
    }, [])

    console.log(store.perfil)

    const editar = async (e) => {
        e.preventDefault()

        // await actions.editarUsuario(id, nombre, apellido, email, genero, birthdate, peso, altura, meta, new_password)
    }

    return (
        <div className="container">
            <div className="logo-container">
            </div>
            <div className="card my-5">
                <div className="card-body">
                    <h2 className="text-center">Editar perfil</h2>
                    <form>

                        <div className="form-group mb-3">
                            <label htmlFor="name">Nombres</label>
                            <input value={nombre} onChange={(e) => setNombre(e.target.value)} type="text" className="form-control" id="name" placeholder="Nombre" />
                        </div>

                        <div className="form-group mb-3">
                            <label htmlFor="last-name">Apellidos</label>
                            <input value={apellido} onChange={(e) => setApellido(e.target.value)} type="text" className="form-control" id="last-name" placeholder="Apellido" />
                        </div>

                        <div className="form-group mb-3">
                            <label htmlFor="name">Género</label>
                            <input value={genero} onChange={(e) => setGenero(e.target.value)} type="text" className="form-control" id="genero" placeholder="Indica género" />
                        </div>

                        <div className="form-group mb-3">
                            <label htmlFor="email">Correo electrónico</label>
                            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="form-control" id="email" placeholder="Correo electrónico" />
                        </div>


                        <div className="form-group mb-3">
                            <label htmlFor="date">Cumpleaños</label>
                            <input value={birthdate} onChange={(e) => setBirthdate(e.target.value)} type="date" className="form-control" id="birthday" placeholder="Tu cumpleaños" />
                        </div>
                        <div className="form-group mb-3">
                            <label htmlFor="text">Peso</label>
                            <input value={peso} onChange={(e) => setPeso(e.target.value)} type="text" className="form-control" id="weight" placeholder="70 kgs" />
                        </div>
                        <div className="form-group mb-3">
                            <label htmlFor="text">Altura</label>
                            <input value={altura} onChange={(e) => setAltura(e.target.value)} type="text" className="form-control" id="height" placeholder="Altura" />
                        </div>

                        <div className="form-group mb-3">
                            <label htmlFor="text">Meta</label>
                            <input value={meta} onChange={(e) => setMeta(e.target.value)} type="text" className="form-control" id="meta" placeholder="Ganar masa muscular" />
                        </div>


                        <div className="form-group mb-3">
                            <label htmlFor="password">Contraseña</label>
                            <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" className="form-control" id="password" placeholder="Tu contraseña" />
                        </div>

                        <div className="form-group mb-3">
                            <label htmlFor="edit-password">Editar Contraseña</label>
                            <input value={new_password} onChange={(e) => setNew_password(e.target.value)} type="edit-password" className="form-control" id="edit-password" placeholder="Cambiar contraseña" />
                        </div>

                        <div className="d-flex justify-content-center mt-4">
                            <button onClick={(e) => editar(e)} type="submit" className="btn btn-primary">Guardar cambios</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )

}