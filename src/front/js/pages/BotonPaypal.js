import React, { useContext, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Context } from '../store/appContext';

export const BotonPaypal = () => {
    const {actions, store} = useContext(Context)
    const navigate = useNavigate();
    const paypal = useRef();

    console.log(store.usuario)

    const actualizarApremium = async () =>{
        await actions.hacerPremium(store.usuario.id)
        await actions.obtenerUsuario(store.usuario.id)
        navigate('/perfil')
    }

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

            onApprove: function () {
                actualizarApremium()
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



// return actions.order.capture().then(function (orderData) {
//     // Full available details
//     navigate('/perfil')
//     console.log('Capture result', orderData, JSON.stringify(orderData, null, 2));
    
// });