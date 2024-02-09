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

    return (
        <div className="flex-container mt-5">
            <h2>Ejercicios</h2>
            <div className="d-flex flex-row overflow-scroll" >
                {listaEjercicios && listaEjercicios.map((item, index) => (
                    <ExerciseCard key={index} />
                ))}
            </div>
        </div>
    )
}

