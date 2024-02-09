import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext.js";
import { RoutineCard } from "../component/RoutineCard.js";
import { ExerciseList } from "../component/ExerciseList.js";
import { useParams } from "react-router-dom";

export const RutinaYEjercicios = () => {
    const { store, actions } = useContext(Context);
    const [rutina, setRutina] = useState({})
    const { id } = useParams()

    useEffect(() => {
        async function aux() {
            setRutina(await actions.unaRutina(id))
        }
        aux()
    }, []);


    return (
        <div className="container mt-5">
            <h1>Titulo de la rutina</h1>
            <RoutineCard nombre={rutina.routine_name} nivel={rutina.difficulty_level} tipoDeEntrenamiento={rutina.type_of_routine} img={rutina.picture} />
            <ExerciseList idRutina={id} />
        </div>
    )
}