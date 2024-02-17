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
        <div className="card m-3 col-lg-4 class-r" >
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={props.imagen} className="img-fluid rounded"/>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{props.nombre}</h5>
                        <p className="card-text">Numero de sets: {props.sets}</p>
                        <p className="card-text"><small className="text-body-secondary">Nro de repeticiones: {props.repeticiones}</small></p>
                    </div>
                </div>
            </div>
        </div>
    )
};