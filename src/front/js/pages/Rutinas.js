import React, { useContext, useEffect, useState } from "react";
import { RoutineCard } from "../component/RoutineCard.js";
import { Context } from "../store/appContext.js";

export const Rutinas = () => {
    const {store, actions } = useContext(Context);
    const [ listaRutinas, setListaRutinas] = useState(null);

    useEffect(() => {
        async function aux() {
            await actions.todasLasRutinas()
            setListaRutinas(store.rutinas)
        }
        aux()
    }, []);


    return (
        <div className="container mt-5">
            <h2>Rutinas</h2>
            <div className="d-flex flex-row overflow-scroll" >
                {listaRutinas && listaRutinas.map((item, index) => (
                    <RoutineCard key={index} nombre={item.routine_name} nivel={item.difficulty_level} 
                    tipoDeEntrenamiento={item.type_of_routine} img={item.picture}/>
                ))}
            </div>
        </div>
    )
}