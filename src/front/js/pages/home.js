import React from "react";
import { Encabezado } from "./home/encabezado";
import { HazteMiembro } from "./home/hazte_miembro";
import { SobreNosotros } from "./home/sobre_nosotros";
import { Clases } from "./home/clases";
import { Horarios } from "./home/horarios";
import { Contacto } from "./home/contacto";
import "../../styles/animations.css"; // Importa el archivo CSS que contiene las animaciones

export const Home = () => {
	return (
		<div className="text-center mt-5">
			<Encabezado />
			<div className="fade-up">
				<HazteMiembro />
			</div>
			<div className="fade-down">
				<SobreNosotros />
			</div>
			<div className="fade-up">
				<Clases />
			</div>
			<div className="fade-down">
				<Horarios />
			</div>
			<div className="fade-up">
				<Contacto />
			</div>
		</div>
	);
};
