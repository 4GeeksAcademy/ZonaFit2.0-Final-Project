import React from "react";
import { Encabezado } from "./home/encabezado";
import { HazteMiembro } from "./home/hazte_miembro";
import { SobreNosotros } from "./home/sobre_nosotros";
import { Clases } from "./home/clases";
import { Horarios } from "./home/horarios";
import { Contacto } from "./home/contacto";

export const Home = () => {


	return (
		<div className="text-center mt-5">
			<Encabezado />
			<HazteMiembro />
			<SobreNosotros />
			<Clases />
			<Horarios />
			<Contacto />

		</div>

	);
};
