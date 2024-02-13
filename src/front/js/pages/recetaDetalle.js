import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext.js";
import { InformacionNutricional } from "../component/InformacionNutricional.js";
import { ListaIngredientes } from "../component/ListaIngredientes.js";
import { InstruccionesPreparacion } from "../component/InstruccionesPreparacion.js";

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
    <div className="container mt-5">
      <h1>{receta.nombre}</h1>
      <img src={receta.imagen} alt={receta.nombre} className="img-fluid" />
      <InformacionNutricional
        calorias={receta.calorias}
        carbohidratos={receta.carbohidratos}
        grasas={receta.grasas}
        proteinas={receta.proteinas}
      />
      <ListaIngredientes ingredientes={receta.ingredientes} />
      <InstruccionesPreparacion instrucciones={receta.instrucciones} />
    </div>
  );
};
