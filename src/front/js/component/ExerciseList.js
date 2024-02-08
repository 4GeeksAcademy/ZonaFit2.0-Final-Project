import React, { useContext, useEffect, useState } from "react";
import { ExerciseCard } from "./ExerciseCard.js";
import { Context } from "../store/appContext.js";

export const ExerciseList = () => {
    const {store, actions } = useContext(Context);
   
    return (
        <div className="flex-container mt-5">
            <h2>Rutinas</h2>
            <div className="d-flex flex-row overflow-scroll" >
                <ExerciseCard/>
                <ExerciseCard/>
                <ExerciseCard/>
                <ExerciseCard/>
                <ExerciseCard/>
                <ExerciseCard/>
            </div>
        </div>
    )
}