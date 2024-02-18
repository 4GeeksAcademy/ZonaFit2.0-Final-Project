
import React from "react";
import "../../pages/home/style/home.css"


export const HazteMiembro = () => {


    return (
        <div className="home-addtion">
            <div className="container">
                <div className="row">
                    <div className="col-lg-5 addtion-r mg-b " data-aos="fade-down"
                        data-aos-delay="50"
                        data-aos-duration="1000">
                        <h3>Nuevo en  Zonafit 2.0?</h3>
                        <h4>tu membresia si pagas dos meses ($62.50 per month)</h4>
                        <p class="text-white">Zonafit 2.0 es tu mejor opcion sube de nivel ahora mismo y empieza el cambio</p>
                        <button className="btn-add">Hazte miembro hoy</button>
                    </div>
                    <div className="col-lg-5 addtion-l " data-aos="fade-down"
                        data-aos-delay="300"
                        data-aos-duration="1000">
                        <h3>Horas de entrenamiento</h3>
                        <span>domingo: no atendemos asesorias</span>
                        <h4>lunes - viernes <br />
                            7:00 AM - 10:00 PM
                        </h4>
                        <h5>sabado <br />
                            9:00 AM - 4:00 PM
                        </h5>



                    </div>
                </div>
            </div>
        </div>
    )
}