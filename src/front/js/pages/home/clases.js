import React from "react";
import "../../pages/home/style/home.css"



export const Clases = () => {


    return (
        <div className="class mg-b" id="class">
            <div className="container">
                <h3>
                    obten el cuerpo que deseas
                </h3>
                <h2>nuestras horas de clases</h2>
                <div className="row">
                    <div className=" col-lg-4 class-l" data-aos="fade-up"
                        data-aos-duration="1000">
                        <div className="card mg-b2">
                            <img src="/hombre-fuerte.jpg" alt="" className="img-fluid" />
                            <div className="card-body class-m">
                                <div className="card-content">
                                    <h2>Yoga</h2>
                                    <h3>Trained by - richard</h3>

                                    <div className="price">
                                        $66
                                    </div>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 " data-aos="fade-down"
                        data-aos-duration="1000">
                        <div className="card mg-b2">
                            <img src="/hombre-fuerte.jpg" alt="" className="img-fluid" />
                            <div className="card-body class-m">
                                <div className="card-content">
                                    <h2>Yoga</h2>
                                    <h3>Asesoria -Andres</h3>

                                    <div className="price">
                                        $66
                                    </div>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 class-r " data-aos="fade-up"
                        data-aos-duration="1000">
                        <div className="card mg-b2">
                            <img src="/hombre-fuerte.jpg" alt="" className="img-fluid" />
                            <div className="card-body class-m">
                                <div className="card-content">
                                    <h2>Yoga</h2>
                                    <h3>asesoria by - Richard</h3>

                                    <div className="price">
                                        $66
                                    </div>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}