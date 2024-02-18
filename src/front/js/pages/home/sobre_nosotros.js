import React from "react";
import "../../pages/home/style/home.css"


export const SobreNosotros = () => {


    return (
        <div className="about mg-t mg-b" id="about">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-lg-4">
                        <div className="card about-card">
                            
                            <div className="card-body">
                                <h3 className="card-title">Richard</h3>
                                <h4 className="card-subtitle">Instructor de Yoga</h4>
                                <div className="social-links">
                                    <a href="#" className="fab fa-twitter"></a>
                                    <a href="#" className="fab fa-facebook-f"></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <div className="card about-card">
                         
                            <div className="card-body">
                                <h3 className="card-title">Andres</h3>
                                <h4 className="card-subtitle">Nutricionista</h4>
                                <div className="social-links">
                                    <a href="#" className="fab fa-twitter"></a>
                                    <a href="#" className="fab fa-facebook-f"></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <div className="card about-card">
                            
                            <div className="card-body">
                                <h3 className="card-title">Jose</h3>
                                <h4 className="card-subtitle">Entrenador Personal</h4>
                                <div className="social-links">
                                    <a href="#" className="fab fa-twitter"></a>
                                    <a href="#" className="fab fa-facebook-f"></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}
