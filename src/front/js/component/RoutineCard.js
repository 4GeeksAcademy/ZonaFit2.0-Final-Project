import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";


export const RoutineCard = (props) => {

    return (
        <div className="card text-bg-dark p-0">
            <img src={props.img} className="card-img" alt="..."/>
                <div className="card-img-overlay">
                    <h5 className="card-title text-light fw-bold mb-1">{props.nivel}</h5>
                    <p className="text-left text-light mb-2">{props.nombre}</p>
                    <p className="text-left text-light mb-0">Equipo completo</p>
                    <p className="text-left text-light mb-0">{props.tipoDeEntrenamiento}</p>
                    <p className="text-left text-light mb-1">Total rutinas: 2</p>
                    <div className="d-flex flex-row-reverse mt-1">
                        <Link className="btn btn-warning" to={/rutinas_y_ejercicios/ + props.id} >Iniciar Rutinas</Link>
                    </div>
                </div>
        </div>
    )
};