import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext.js";


export const RecetaDetalle = () => {
  const { store, actions } = useContext(Context);
  const { id } = useParams();
  const [receta, setReceta] = useState({});

  useEffect(() => {
    async function fetchData() {
      const data = await actions.obtenerRecetaPorId(id);
      setReceta(data);
    }
    fetchData();
  }, []);

  return (
    <div className="container" style={{ marginTop: "150px" }}>

      <div className="card mb-3" style={{ maxWidth: "540px" }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img src={receta.image} alt={receta.recipe_name} className="img-fluid rounded-start" />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{receta.recipe_name} ({receta.meal})</h5>
              <p className="card-text">Ingredientes: {receta.ingredient}</p>
              <p className="card-text">Instrucciones: {receta.recipe_instructions}</p>
              <p className="card-text"><small className="text-muted">Proteinas: {receta.proteins} Kcal</small></p>
              <p className="card-text"><small className="text-muted">Calorias: {receta.calories} </small></p>
              <p className="card-text"><small className="text-muted">Carbohidratos: {receta.carbohydrates} </small></p>
              <p className="card-text"><small className="text-muted">Grasas: {receta.fats} </small></p>
              <p className="card-text"><small className="text-muted">Tiempo de preparación: {receta.time} </small></p>
            </div>
          </div>
        </div>
      </div>

    </div >
  );
};
