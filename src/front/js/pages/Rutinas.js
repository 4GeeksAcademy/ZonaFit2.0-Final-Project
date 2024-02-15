import React, { useContext, useEffect, useState } from "react";
import { RoutineCard } from "../component/RoutineCard.js";
import { Context } from "../store/appContext.js";
import "../../styles/styles.css";
import { Link, useNavigate } from "react-router-dom";

export const Rutinas = () => {
    const {store, actions } = useContext(Context);
    const [ listaRutinas, setListaRutinas] = useState(null);
    const navigate = useNavigate();
    
    useEffect(() => {
        async function aux() {
            await actions.todasLasRutinas()
            setListaRutinas(store.rutinas)
        }
        if (store.token === "" || store.token === undefined){
            navigate('/')}

        else{
            aux()
        }
    }, []);


    return (
        <div className="home">
            <div className="container pt-5 mt-5">
                <h2 className="pt-5 mt-5" >Rutinas</h2>
                <div className="d-flex pt-5 mt-5 flex-row overflow-scroll">
                    {listaRutinas && listaRutinas.map((item, index) => (
                        <RoutineCard premium={item.premium} key={index} id={item.id} nombre={item.routine_name} nivel={item.difficulty_level}
                            tipoDeEntrenamiento={item.type_of_routine} img={item.picture} />
                    ))}
                </div>
            </div>
        </div>
    /* 
        // <div className="container pt-5 mt-5">
        //     <h2>Rutinas</h2>
        //     <div className="d-flex flex-row overflow-scroll" >
        //         {listaRutinas && listaRutinas.map((item, index) => (
        //             <RoutineCard key={index} id={item.id} nombre={item.routine_name} nivel={item.difficulty_level} 
        //             tipoDeEntrenamiento={item.type_of_routine} img={item.picture}/>
        //         ))}
        //     </div>
        // </div> */
    )
}