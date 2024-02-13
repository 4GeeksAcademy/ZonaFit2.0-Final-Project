import React from "react";
import { Link } from "react-router-dom";

export const RecetaCard = ({ receta }) => {
    console.log(receta)
    return (
        <div className="card m-2" style={{ width: "18rem" }}>
            <img src={receta.imagen} alt={receta.nombre} className="card-img-top" />
            <div className="card-body">
                <h5 className="card-title">{receta.nombre}</h5>
                <div className="d-flex justify-content-between">
                    <p className="card-text">{receta.tiempo_preparacion} min</p>
                    <p className="card-text">{receta.calorias} Kcal</p>
                </div>
                <Link to={`/recetas/${receta.id}`} className="btn btn-primary">Ver receta</Link>
            </div>
        </div>
    );
}