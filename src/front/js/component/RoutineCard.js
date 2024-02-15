import React, { useContext, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Context } from "../store/appContext";
import { storedMeasure } from "react-component/lib/ReactPerf";

// ruta 1 = /rutinas ruta 2 = rutinas_y_ejercicios/

export const RoutineCard = (props) => {
    const { actions, store} = useContext(Context);
    const location = useLocation();
    const rutaUno = '/rutinas';

    const condiciones = () =>{
        if (location.pathname === rutaUno){
            if (!props.premium){
                return(
                    <Link className="btn btn-warning" to={/rutinas_y_ejercicios/ + props.id} >Iniciar Rutina</Link> 
                )
            }
            else if (store.usuario.is_premium){
                return(
                <Link className="btn btn-warning" to={/rutinas_y_ejercicios/ + props.id} >Iniciar Rutina</Link>
                )
            } 
            else {
                return(
                <Link className="btn btn-warning" to={"/pagos"} >Ser Premium</Link>
                )
            }
        }
        else {
            return(
                <Link className="btn btn-warning" to={/ejercicio/ + props.id} >Iniciar Rutina</Link> 
            )
        }
    }

    return (
        <div className="card text-bg-dark me-5 p-0 col-lg-4 class-r "  data-aos="fade-up" data-aos-duration="1000">
            <img src={props.img} className="card-img rounded-4" alt="..."/>
                <div className="card-img-overlay">
                    <h5 className="card-title text-light fw-bold mb-1">{props.nivel}</h5>
                    <p className="text-left text-light mb-2">{props.nombre}</p>
                    <p className="text-left text-light mb-0">{props.premium ? "Premium" : "Free" }</p>
                    <p className="text-left text-light mb-0">{props.tipoDeEntrenamiento}</p>
                    <p className="text-left text-light mb-1">Total rutinas: 2</p>
                    <div className="d-flex flex-row-reverse mt-1">
                        {condiciones()}
                    </div>
                </div>
        </div>
    )
};