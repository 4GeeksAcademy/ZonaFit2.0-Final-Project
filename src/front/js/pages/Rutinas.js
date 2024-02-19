import React, { useContext, useEffect, useState } from "react";
import { RoutineCard } from "../component/RoutineCard.js";
import { Context } from "../store/appContext.js";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/styles.css";

export const Rutinas = () => {
    const {store, actions } = useContext(Context);
    const [ listaRutinas, setListaRutinas] = useState(null);
    const navigate = useNavigate();
    
    useEffect(() => {
        async function aux() {
            await actions.todasLasRutinas()
            setListaRutinas(store.rutinas)
        }
        if (store.auth === false){
            navigate('/')}

        else{
            aux()
        }
    }, []);

    ///
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


    ///
    return (
        <div >
            <div className="container pt-5 mt-5">
                <p className="pt-5 mt-5 text-light fs-1">Rutinas</p>
                <div id="contenedor-imagenes" onMouseDown={handleMouseDown} onMouseUp={handleMouseUp} onMouseLeave={handleMouseLeave} onMouseMove={handleMouseMove} className="d-flex pt-5 mt-5 flex-row overflow-scroll">
                    {listaRutinas && listaRutinas.map((item, index) => (
                        <RoutineCard premium={item.premium} key={index} id={item.id} nombre={item.routine_name} nivel={item.difficulty_level}
                            tipoDeEntrenamiento={item.type_of_routine} img={item.picture} />
                    ))}
                </div>
            </div>
        </div>
    )
}