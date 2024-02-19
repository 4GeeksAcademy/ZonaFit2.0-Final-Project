import React, { useContext, useEffect, useState } from "react";
import "../../styles/styles.css";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import { BotonPaypal } from "./BotonPaypal";


export const Pago = () => {
    const { store } = useContext(Context)
    const navigate = useNavigate();

    useEffect(() => {
        if (store.auth === false) {
            navigate('/')
        }
    }, []);

    return (
        <div>
            <div className="container-fluid d-flex justify-content-center align-items-center vh-100 bg-primary text-light">
                <div className="mt-5 pt-5 text-center">
                <img className="img-fluid imagen-reducida rounded mt-2" src="https://cdn.muscleandstrength.com/sites/default/files/styles/800x500/public/muscular-guy-doing-cable-flys.jpg?itok=cSCNyLEj" alt="" />
                    <p className="fs-4 mb-1" >
                        Realiza tu pago para disfrutar de todos los beneficios
                    </p>
                    <p className="fs-4 mb-1">Membresía de por vida por solo 10 USD!</p>
                    <p className="fs-4 mb-1">Paga tu suscripción ahora!!</p>
                    <div className="row mt-3">
                        <div className="mx-auto mt-4 mt-lg-0 mt-md-0 col-lg-5 col-md-6 col-12 contcat-map">
                            <div id="smart-button-container">
                                <div>
                                    <BotonPaypal />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
