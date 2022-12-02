import { useState } from "react";

const Rating =({setRating}) => {
    const [nota, setNota]=useState(10)
    const cambiarNota =(e)=>{
        setNota(+e.currentTarget.value)
        setRating(+e.currentTarget.value)
    }
    return(
        <ul className="rating">
            {[1,2,3,4,5,6,7,8,9,10].map((numero)=>(
                 <li key={numero}>
                 <input 
                 id={numero}
                 type="radio"
                 name="rating"
                 onChange={cambiarNota}
                 value={numero}
                 checked={numero === nota}>
                 </input>
             <label htmlFor={numero}>{numero}</label>
             </li>
            ))}
           
        </ul>
    )
}


export default Rating;