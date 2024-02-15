import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

export const BotonPaypal = () => {
    const navigate = useNavigate();
    const paypal = useRef();

    useEffect(() => {
        window.paypal.Buttons({
            createOrder: function (data, actions, err) {
                return actions.order.create({
                    intent: "CAPTURE",
                    purchase_units: [
                        { 
                            "description": "Entrenamiento personalizado",
                            "amount": { 
                                "currency_code": "USD",
                                "value": 10
                            }
                        }
                    ]
                });
            },

            onApprove: function (data, actions) {
                return actions.order.capture().then(function (orderData) {

                    // Full available details
                    //a
                    console.log('Capture result', orderData, JSON.stringify(orderData, null, 2));
                    navigate("/perfil");
                });
            },

            onError: function (err) {
                console.log(err);
            },
        }).render(paypal.current)
    }, []);
    

    return (
        <div>
            <div ref={paypal} ></div>
        </div>
    );
}