import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";


export const ExerciseCard = () => {

    // const { store, actions } = useContext(Context)

    return (
        <div className="card m-3" >
            <div className="row g-0">
                <div className="col-md-4">
                    <img src="https://place-hold.it/200x200" className="img-fluid rounded-start"/>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">Nombre ejercicio</h5>
                        <p className="card-text">Nro de Sets</p>
                        <p className="card-text"><small className="text-body-secondary">Nro de repeticiones</small></p>
                    </div>
                </div>
            </div>
        </div>
    )
};