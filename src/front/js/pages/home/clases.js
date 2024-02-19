import React from "react";
import "./style/clases.css";




export const Clases = () => {


    return (
        <div className="section-container" id="about">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-6 text-center text-md-start">
                        <h2 className="section-heading mb-4  text-white">
                            ¡Transforma tu cuerpo y cocina delicioso!
                        </h2>
                        <p className="lead  text-white">
                            ZonaFit 2.0 te ofrece planes de entrenamiento personalizados y
                            deliciosas recetas saludables para alcanzar tus objetivos fitness
                            de forma sostenible y placentera. Olvídate de las dietas
                            aburridas y entrenamientos monótonos. ¡Únete a la revolución
                            fitness con sabor!
                        </p>
                    </div>
                    <div className="col-md-6">
                        <img
                            src="https://i.ibb.co/sHFWw5L/pexels-anna-tarazevich-14751176.jpg"
                            alt="Persona feliz y en forma cocinando"
                            className="img-fluid mx-auto d-block"
                        />
                    </div>
                </div>

                <h2 className="section-heading mt-5 mb-4  text-white" id="class">
                    ¡Grandes beneficios te esperan!
                </h2>
                <div className="row mt-5">
                    <div className="col-md-4">
                        <div className="card about-card h-100">
                            <img
                                src="https://i.ibb.co/t2cxKQs/pexels-photo-20204672.jpg"
                                alt="Plato de comida saludable y colorida"
                                className="card-img-top"
                            />
                            <div className="card-body ">
                                <h3 className="card-title ">Recetas deliciosas</h3>
                                <p className="card-text">
                                    Descubre cientos de recetas nutritivas y fáciles de
                                    preparar, creadas por expertos en nutrición. Desde
                                    desayunos energéticos hasta cenas ligeras, encuentra
                                    opciones para todos los gustos y necesidades
                                    dietarias.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card about-card h-100">
                            <img
                                src="https://i.ibb.co/YBXBfgY/pexels-kampus-production-8173430.jpg"
                                alt="Persona haciendo ejercicio con entrenador personal"
                                className="card-img-top"
                            />
                            <div className="card-body">
                                <h3 className="card-title">Entrenamientos personalizados</h3>
                                <p className="card-text">
                                    Obtén un plan de entrenamiento personalizado
                                    adaptado a tu nivel físico y objetivos. Elige entre
                                    rutinas de yoga, fuerza, cardio o HIIT, y recibe
                                    instrucciones paso a paso con videos explicativos.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card about-card h-100">
                            <img
                                src="https://i.ibb.co/wRMWTTk/pexels-dio-hasbi-saniskoro-3280130.jpg"
                                alt="Grupo de personas haciendo ejercicio juntas"
                                className="card-img-top"
                            />
                            <div className="card-body">
                                <h3 className="card-title">Comunidad motivadora</h3>
                                <p className="card-text">
                                    Únete a nuestra comunidad online y conecta con
                                    personas que comparten tus objetivos. Comparte
                                    experiencias, recibe apoyo y motivación, y celebra
                                    tus logros junto a otros usuarios de ZonaFit 2.0.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};