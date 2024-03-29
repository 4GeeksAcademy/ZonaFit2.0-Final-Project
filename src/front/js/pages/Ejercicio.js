import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { useNavigate, useParams } from "react-router-dom";
import Swal from 'sweetalert2';

export const Ejercicio = () => {
    const { store, actions } = useContext(Context);
    const { id } = useParams();
    const navigate = useNavigate();
    const [ejercicio, setEjercicio] = useState(null);
    const [contador, setContador] = useState(0);
    const [RepContador, setRepContador] = useState(1);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await actions.detallesDeUnaRutina(id);
                setEjercicio(response);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        if (store.auth === false) {
            navigate('/')
        }

        else {
            fetchData()
        }
    }, []);

    if (!ejercicio) {
        return <div>Loading...</div>;
    };

    const handleExercise = () => {
        if (contador + 1 < ejercicio.length) {
            setContador(contador + 1);
        }
        else {
            Swal.fire({
                icon: "success",
                title: "Rutina Culminada",
                text: "Felicidades !!!",
            })
            useNavigate('/perfil')
        }
    };

    const handleRep = () => {
        if (RepContador < ejercicio[contador].series) {
            setRepContador(RepContador + 1)
        }
        else {
            handleExercise()
            if (contador + 1 < ejercicio.length) {
                setRepContador(1)
                Swal.fire({
                    icon: "success",
                    title: "Set Culminado",
                    text: "Procede al siguiente ejercicio",
                });
            }
        }
    };

    const descripcion = ejercicio[contador].descripcion

    function separarString(str) {
        var partes = str.split(".");
        for (var i = 0; i < partes.length; i++) {
            partes[i] = partes[i].trim();
        }
        partes = partes.filter(part => part !== "");
        return partes;
    }

    return (
        <div className="pt-5 mt-5">
            <div className="d-flex text-light fs-3 justify-content-between" >
                <p className="ms-5" >  Rutina: {ejercicio[contador].nombreRutina} </p>
                <div className="me-5 "> Ejercicio: {contador + 1} de {ejercicio.length} </div>
            </div>

            <div className="mx-5 rounded-3 d-flex bg-light">
                <div className="ms-5 d-flex justify-content-center align-items-center ">
                    <iframe className="rounded-3" width="640" height="360" src={"https://www.youtube.com/embed/" + ejercicio[contador].video} frameborder="0" allowfullscreen></iframe>
                </div>
                <div className="text-dark fs-6 ms-5 mb-1 ">
                    <p className="mt-3 mb-0" > Nombre del ejercicio: {ejercicio[contador].nombreEjercicio}</p>
                    <p className="mb-0"> Musculos involucrados: {ejercicio[contador].muscle_name} </p>
                    <p className="mb-2"> Equipo necesario: {ejercicio[contador].equipment_name}</p>
                    <p className="mb-0"> Descripción: </p>
                    {separarString(descripcion).map((item, index) => (
                        <p key={index} className="mb-0"> {item}. </p>
                    ))}
                    <p className="mt-2"> Nivel de dificultad: {ejercicio[contador].dificultad} </p>
                    <div> Contador de sets {RepContador} de {ejercicio[contador].series} </div>
                    <p> Repeticiones por ejercicio: {ejercicio[contador].repeticiones} </p>
                    <button className="btn btn-warning mb-3 me-3" onClick={handleRep} >Siguiente Set</button>
                    <button className="btn btn-warning mb-3" onClick={handleExercise} >Siguiente ejercicio</button>
                </div>
            </div>
        </div>
    );
}