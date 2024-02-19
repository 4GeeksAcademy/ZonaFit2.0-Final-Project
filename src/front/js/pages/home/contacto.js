import React from "react";
import "../../pages/home/style/home.css";

export const Contacto = () => {
    return (
        <div className="contact" id="contact">
            <div className="container">
                <div className="row">
                    <div className="ml-auto col-lg-5 col-md-6 col-12 contact-info" data-aos="fade-up" data-aos-delay="200">
                        <h2 className="mb-4 pb-2 text-white">
                            Siéntete libre de preguntar cualquier duda
                        </h2>
                        <form
                            action="#"
                            method="post"
                            className="contact-form webform"
                        >
                            <input
                                type="text"
                                className=""
                                name="cf-name"
                                placeholder="Nombre"
                                required
                            />
                            <input
                                type="email"
                                className=""
                                name="cf-email"
                                placeholder="Email"
                                required
                            />
                            <textarea
                                className=""
                                rows="5"
                                name="cf-message"
                                placeholder="Mensaje"
                                required
                            ></textarea>
                            <button
                                type="submit"
                                className=""
                                id="submit-button"
                                name="submit"
                            >
                                Enviar mensaje
                            </button>
                        </form>
                    </div>
                    <div className="mx-auto mt-4 mt-lg-0 mt-md-0 col-lg-5 col-md-6 col-12 contact-map" data-aos="fade-up" data-aos-delay="400">
                        <h2 className="mb-4 text-light">
                            Donde puedes encontrarnos{" "}
                            <span>Ubícanos</span>
                        </h2>
                        <p>
                            <i className="fa fa-map-marker mr-1 text-light"></i> Caracas - Venezuela
                        </p>
                        {/* Google Maps */}
                        <div className="google-map text-light">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d251097.9341499126!2d-67.05517777545138!3d10.468687040409403!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c2a58adcd824807%3A0x93dd2eae0a998483!2sCaracas%2C%20Distrito%20Capital!5e0!3m2!1ses!2sve!4v1707056121975!5m2!1ses!2sve"
                                width="600"
                                height="450"
                                style={{ border: "0" }}
                                allowFullScreen={true}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
