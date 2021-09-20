import React, { useState, useEffect } from "react";
import CardsProgTV from "../components/CardsProgTV";
const ProgramasTV = () => {
    const[prog, setProg]=useState([]);
    console.log(prog)
    

    useEffect(()=>{
        fetch ('https://api.themoviedb.org/3/tv/popular?api_key=64b73d43a55a920af8890d10d8de7724')
        .then(response=>response.json())
        .then(data=>{setProg(data.results)});
    },[])

    return ( 
        <div className="row p-3">
            {prog.map(item=>
            <div className="col-lg-3 col-sm-12">
                <CardsProgTV name={item.original_name} url={item.poster_path}/>
            </div>)} 
        </div>
    
     );
}
 
export default ProgramasTV;