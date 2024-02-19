import React, { useContext, useEffect, useState } from "react";
import { ExerciseCard } from "./ExerciseCard.js";
import { Context } from "../store/appContext.js";

export const ExerciseList = (props) => {
    const { store, actions } = useContext(Context);
    const [listaEjercicios, setListaEjercicios] = useState(null)
    
    useEffect(() => {
        async function aux() {
            await actions.todosLosEjerciciosDeUnaRutina(props.idRutina)
            setListaEjercicios(store.ejercicios)
        }
        aux()
    }, []);

    //
    const [isMouseDown, setIsMouseDown] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e) => {
    setIsMouseDown(true);
    setStartX(e.pageX);
    setScrollLeft(e.target.scrollLeft);
    e.currentTarget.style.cursor = 'grabbing'; // Cambia el cursor al agarrar
  };

  const handleMouseUp = (e) => {
    setIsMouseDown(false);
    e.currentTarget.style.cursor = 'grab'; // Cambia el cursor de nuevo al soltar
  };

  const handleMouseLeave = () => {
    setIsMouseDown(false);
  };

  const handleMouseMove = (e) => {
    if (!isMouseDown) return;
    e.preventDefault();
    const x = e.pageX;
    const walk = (x - startX) * 3; // Ajusta la velocidad de desplazamiento
    e.currentTarget.scrollLeft = scrollLeft - walk;
  };
    //

    return (
        <div className="flex-container mt-5">
            <h2>Ejercicios</h2>
            <div className="d-flex flex-row overflow-scroll" id="contenedor-imagenes" onMouseDown={handleMouseDown} onMouseUp={handleMouseUp} onMouseLeave={handleMouseLeave} onMouseMove={handleMouseMove} >
                {listaEjercicios && listaEjercicios.map((item, index) => (
                    <ExerciseCard key={index} nombre={item.nombreEjercicio} idEjercicio={item.idEjercicio} sets={item.series} repeticiones={item.repeticiones} imagen={item.imagen} />
                ))}
            </div>
        </div>
    )
}

