const CardsProgTV = (props) => {
    return ( 
        <div>
        
            <div className="card" style={{width: "15rem"}}>
            <img src={"https://image.tmdb.org/t/p/original"+props.backdrop_path} className="card-img-top" alt="..."/>
            <div className="card-body">
            <h5 className="card-title">{props.original_name}</h5>
            </div>
            </div>
        </div>
     );
}
 
export default CardsProgTV;