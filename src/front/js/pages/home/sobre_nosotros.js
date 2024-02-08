import React from "react";
import "../../pages/home/style/home.css"


export const SobreNosotros = () => {


    return (
        <div className="about mg-t mg-b" id="about">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 about-cont" data-aos="fade-left"
                        data-aos-duration="1000">
                        <h2>HOLA , nosotros somos Zonafit 2.0 team</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                        <span>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</span>
                    </div>
                    <div className="col-md-6 col-lg-4" data-aos="fade-up"
                        data-aos-duration="1000">
                        <div className="card about-cardl mg-b2">
                            <img src="/hombre-fit.jpg" alt="" className="img-fluid" />
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-xm-7 card-b">
                                        <h3>Richard</h3>
                                        <h4>Yoga Instructor</h4>
                                    </div>
                                    <div className="col-xm-5 card-so">
                                        <i className="fab fa-twitter "></i>
                                        <i className="fab fa-facebook-f "></i>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4" data-aos="fade-up"
                        data-aos-duration="1000">
                        <div className="card about-cardl mg-b2">
                            <img src="/hombre-fit.jpg" alt="" className="img-fluid" />
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-xm-7 card-b">
                                        <h3>Jose</h3>
                                        <h4>Yoga Instructor</h4>
                                    </div>
                                    <div className="col-xm-5 card-so">
                                        <i className="fab fa-twitter "></i>
                                        <i className="fab fa-facebook-f "></i>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}