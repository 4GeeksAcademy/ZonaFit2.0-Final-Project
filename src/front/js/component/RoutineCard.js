import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";


export const RoutineCard = (props) => {

    const { store, actions } = useContext(Context)

    return (
        <div className="card text-bg-dark p-0">
            <img src={props.img} className="card-img" alt="..."/>
                <div className="card-img-overlay">
                    <h5 className="card-title mb-1">{props.nivel}</h5>
                    <p className="text-left mb-2">{props.nombre}</p>
                    <p className="text-left mb-0">Equipo completo</p>
                    <p className="text-left mb-0">{props.tipoDeEntrenamiento}</p>
                    <p className="text-left mb-1">Total rutinas: 2</p>
                    <div className="d-flex flex-row-reverse mt-1">
                        <button className="btn btn-warning">Iniciar</button>
                    </div>
                </div>
        </div>
    )
};