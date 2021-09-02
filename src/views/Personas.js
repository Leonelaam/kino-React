import React, { useState, useEffect } from "react";
import CardsPersonas from "../components/CardsPersonas";
const Personas = () => {
    const[person, setPerson]=useState([]);
    console.log(person)
    

    useEffect(()=>{
        fetch ('https://api.themoviedb.org/3/person/popular?api_key=64b73d43a55a920af8890d10d8de7724')
        .then(response=>response.json())
        .then(data=>{setPerson(data.results)});
    },[])

    return ( 
        <div className="row">
            {person.map(item=>
            <div className="col-lg-3">
            <CardsPersonas name={item.name} profile_path={item.profile_path}/>
            </div>)} 
        </div>
    
     );
}
 
export default Personas;