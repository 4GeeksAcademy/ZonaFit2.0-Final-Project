import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/editar_perfil.css";
import logo from "../../img/logo.png"
import { useNavigate, useParams } from "react-router-dom";


export const Editar_perfil = () => {
    const { store, actions } = useContext(Context);
    const { id } = useParams()
    const [nombre, setNombre] = useState(undefined)
    const [apellido, setApellido] = useState(undefined)
    const [genero, setGenero] = useState(undefined)
    const [email, setEmail] = useState(undefined)
    const [birthdate, setBirthdate] = useState(undefined)
    const [peso, setPeso] = useState(undefined)
    const [altura, setAltura] = useState(undefined)
    const [meta, setMeta] = useState(undefined)
    const [password, setPassword] = useState(undefined)
    const [new_password, setNew_password] = useState(undefined)
    const navigate = useNavigate()

    useEffect(() => {
        if (store.auth === false) {
            navigate('/')
        } else {
            infoUser()
        }
    }, [])


    const infoUser = async () => {
        try {
            const respuesta = await actions.obtenerUsuario(id)

            setNombre(store.usuario.first_name || "")
            setApellido(store.usuario.last_name || "")
            setGenero(store.usuario.gender || "")
            setEmail(store.usuario.email || "")
            setBirthdate(store.usuario.birthdate || "")
            setPeso(store.usuario.weight || "")
            setAltura(store.usuario.height || "")
            setMeta(store.usuario.meta || "")

        } catch (e) {
            console.error(e)
        }
    }




    const editar = async () => {
        await actions.editarUsuario(id, nombre, apellido, email, genero, birthdate, peso, altura, meta, new_password)
        actions.obtenerUsuario(id)
        navigate('/perfil')
    }


    return (
        <div className="container mt-5 pt-5 ">
            <div className="logo-container">
            </div>
            <div className="card my-5">
                <div className="card-body">
                    <h1 className="text-center">Editar perfil</h1>

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
                        <button onClick={editar} className="btn btn-primary">Guardar cambios</button>
                    </div>

                </div>
            </div>
        </div>
    )

}