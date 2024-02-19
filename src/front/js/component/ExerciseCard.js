import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

export const ExerciseCard = (props) => {
    
    const { store, actions } = useContext(Context) //podria pedir info de un ejercicio en particular aca pidiendo action y eso
    const [ ejercicio, setEjercicio ] = useState({});
    
    useEffect(() => {
        async function aux() {
            await actions.unEjercicio(props.idEjercicio)
        }
        aux()
    }, []);

    return (
        <div className="card m-3 col-lg-4 p-2 class-r" >
            <div className="row g-0">
                <div className="col-md-4 d-flex justify-content-center align-items-center">
                    <img src={props.imagen} className="img-fluid rounded"/>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{props.nombre}</h5>
                        <p className="card-text mb-1">Número de sets: {props.sets}</p>
                        <p className="card-text mb-1"><small className="text-body-secondary">Número de repeticiones: {props.repeticiones}</small></p>
                    </div>
                </div>
            </div>
        </div>
    )
};