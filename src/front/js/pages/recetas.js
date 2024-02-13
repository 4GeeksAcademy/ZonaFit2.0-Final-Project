import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext.js";
// import { RecetaCard } from "../component/recetaCard.js";
import { RecetaCard } from "../pages/recetaCard.js";

export const Recetas = () => {
    const { store, actions } = useContext(Context);
    const [listaRecetas, setListaRecetas] = useState([]);
    const [filtroComida, setFiltroComida] = useState("");

    useEffect(() => {
        async function fetchData() {
            const data = await actions.obtenerTodasLasRecetas();
            setListaRecetas(data);
        }
        fetchData();
    }, []);

    const filtrarRecetas = () => {
        if (filtroComida === "") {
            return listaRecetas;
        } else {
            return listaRecetas.filter((receta) => receta.tipo_comida === filtroComida);
        }
    };

    return (
        <div className="container mt-5">
            <h2>Recetas</h2>
            <div className="d-flex flex-row mb-3">
                <select
                    className="form-select"
                    value={filtroComida}
                    onChange={(e) => setFiltroComida(e.target.value)}
                >
                    <option value="">Todas</option>
                    <option value="desayuno">Desayuno</option>
                    <option value="almuerzo">Almuerzo</option>
                    <option value="cena">Cena</option>
                </select>
            </div>
            <div className="d-flex flex-row overflow-scroll">
                {filtrarRecetas().map((receta, index) => (
                    <RecetaCard key={index} receta={receta} />
                ))}
            </div>
        </div>
    );
};
