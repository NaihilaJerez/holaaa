import Rating from "./Rating";
import { useState } from "react";

const FormResenias =({addResenia}) => {
    //estados para el rating y el texto 
    const[rating, setRating]=useState(10)
    const[text, setText]=useState('')
    const cambiarTexto=(e)=>{
        setText(e.target.value)
    }
    const controlSubmit=(e)=>{
        e.preventDefault()
        //crear objeto resenia 
        let newResenia={
            rating, 
            text
        }
        //añadir reseña al arreglo 
        addResenia(newResenia)
    }
    return(
        <div className="card">
            <form onSubmit={controlSubmit}>
                <h2>¿Como calificas el curso?</h2>
                <Rating
                setRating={setRating}/>
                <div className="input-group">
                    <input type="text" 
                    placeholder="Escriba aqui su comentario"
                    onChange={cambiarTexto}/>
                    <button type="submit">
                        registrar
                    </button>
                </div>
                </form></div>
    )
}


export default FormResenias;