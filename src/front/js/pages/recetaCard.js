import React from "react";
import { Link } from "react-router-dom";

export const RecetaCard = ({ receta }) => {
    console.log(receta)
    return (
        <div className="card m-2" style={{ width: "18rem" }}>
            <img src={receta.imagen} alt={receta.recipe_name} className="card-img-top" />
            <div className="card-body">
                <h5 className="card-title">{receta.recipe_name}</h5>
                <div className="d-flex justify-content-between">
                    <p className="card-text">{receta.proteins} Proteins </p>
                    <p className="card-text">{receta.fats} Kcal</p>
                </div>
                <Link to={`/recetas/${receta.id}`} className="btn btn-primary">Ver receta</Link>
            </div>
        </div>
    );
}