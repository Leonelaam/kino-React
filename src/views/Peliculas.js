import React, { useState, useEffect } from "react";
import CardsPelis from "../components/CardsPelis";
const Peliculas = () => {
    const[film, setFilm]=useState([]);
    // console.log(film)

    useEffect(()=>{
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=64b73d43a55a920af8890d10d8de7724')
        .then(response=>response.json())
        .then(data=>{setFilm(data.results)});
    }, [])

    return (    
        <div className="row">
            {film.map(item=>
            <div className="col-lg-3">
            <CardsPelis title={item.original_title} date={item.release_date} url={item.poster_path} id={item.id}/>
            </div>)} 
        </div>
    
     );
}
 
export default Peliculas;