import React, { useContext, useEffect, useState } from "react";
import "../../styles/styles.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import { BotonPaypal } from "./BotonPaypal";


export const Pago = () => {

    const [checkout, setCheckout] = useState(false)

    return (
        <div>
            <div className="container mt-5 pt-5" >
                <h3>
                    Realiza tu pago para disfrutas de todos los beneficios
                </h3>
                <h2>Paga tu suscripcion ahora!!</h2>
                <div class="row">
                    <div class="mx-auto mt-4 mt-lg-0 mt-md-0 col-lg-5 col-md-6 col-12 contcat-map">
                        <div id="smart-button-container">
                            <div>
                              <BotonPaypal/>  
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

// {checkout ? <BotonPaypal/> :  <button onClick={() => {setCheckout(true);}} >Checkout</button> }