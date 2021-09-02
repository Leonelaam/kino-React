const CardsPersonas = (props) => {
    return ( 
        <div>
        
            <div className="card" style={{width: "15rem"}}>
            <img src={"https://image.tmdb.org/t/p/w500"+props.profile_path} className="card-img-top" alt="..."/>
            <div className="card-body">
            <h5 className="card-title">{props.name}</h5>
            </div>
            </div>
        </div>
     );
}
 
export default CardsPersonas;