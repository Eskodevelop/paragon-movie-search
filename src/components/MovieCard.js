//import {useEffect, useState} from "react";

const MovieCard = (props) => {

    return (
        <div className="row">
            {
                props.movies && props.movies.length > 0 && props.movies.map((item, i) =>{
                    return (
                        <div className="card" style={{width: '18rem'}} key={i} onClick={(e)=>props.handleOpenModal(e, item)}>
                            <img className="card-img-top" src={item.i.imageUrl} style={{height:'200px'}}/>
                            <div className="card-body">
                                <h5 className="card-title">{item.l}</h5>
                                <a onClick={(e)=>props.setFavoriteMovies(e,item)} className="btn btn-primary">Favorite</a>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default MovieCard;
