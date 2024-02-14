
import React from "react";
import "../../pages/home/style/home.css"


export const Encabezado = () => {


    return (
        <div className="home ">
            <div className="home-content" id="home">

                <h3 data-aos="fade-right" data-aos-duration="1000">
                    es hora de construir un mejor cuerpo!
                </h3>
                <h2 data-aos="fade-right"
                    data-aos-duration="1000">Cambia tu cuerpo con
                    Zonafit2.0 </h2>
                <div className="home-btn">
                    <button className="btnl bt" data-aos="fade-left"
                        data-aos-duration="1000">empezemos</button>
                    <button className="btnl bt" data-aos="fade-down"
                        data-aos-duration="1000">mas info</button>
                </div>
            </div>
        </div>
    )
}