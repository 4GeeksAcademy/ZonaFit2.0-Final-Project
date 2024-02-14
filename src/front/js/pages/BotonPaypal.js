import React, { useEffect, useRef } from 'react';

export const BotonPaypal = () => {

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
                    console.log('Capture result', orderData, JSON.stringify(orderData, null, 2));
                    actions.redirect('para cuando haya sido exitosa la transaccion');
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