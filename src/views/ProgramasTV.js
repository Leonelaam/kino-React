import React, { useState, useEffect } from "react";
import CardsProgTV from "../components/CardsPersonas";
const ProgramasTV = () => {
    const[prog, setProg]=useState([]);
    console.log(prog)
    

    useEffect(()=>{
        fetch ('https://api.themoviedb.org/3/tv/popular?api_key=64b73d43a55a920af8890d10d8de7724')
        .then(response=>response.json())
        .then(data=>{setProg(data.results)});
    },[])

    return ( 
        <div>
            {prog.map(item=>
            <div >
                <CardsProgTV original_name={item.original_name} backdrop_path={item.backdrop_path}/>
            </div>)} 
        </div>
    
     );
}
 
export default ProgramasTV;