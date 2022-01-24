
import MovieCard from "./MovieCard";
//import {useEffect, useState} from "react";

const MoviesList = (props) => {
    return (
            <MovieCard
                movies={props.movies}
                setFavoriteMovies={props.setFavoriteMovies}
                handleOpenModal={props.handleOpenModal}
            />
    );
}

export default MoviesList;
