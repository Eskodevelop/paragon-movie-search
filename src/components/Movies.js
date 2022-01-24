import MainScreen from "./MainScreen";
import DetailsModal from "./DetailsModal";
import {useEffect, useState} from "react";
/* eslint-disable */
const axios = require("axios").default;

const Movies = () => {

    const [movies, setMovies] = useState([]);
    const [favMovies, setFavMovies] = useState([]);
    const [searchQ, setSearchQ] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    const [activeMovie, setActiveMovie] = useState(undefined);

    useEffect(async () => {
        await getData();
        if (localStorage.getItem("favorites") != null) {
            setFavMovies(JSON.parse(localStorage.getItem("favorites")))
        }
    }, [searchQ]);

    const setFavoriteMovies = (e, movie) => {
        e.stopPropagation();
        let favM = [...favMovies, movie];
        setFavMovies(favM);
        localStorage.setItem("favorites", JSON.stringify(favM));
    }

    const handleOpenModal=(e, movie)=>{
        e.stopPropagation();
        setIsOpen(!isOpen);
        setActiveMovie(movie);
    }

    const handleEditMovie=(movie) =>  {

    }

    const getData = async () => {
        if (localStorage.getItem(searchQ) !== null) {
            setMovies(JSON.parse(localStorage.getItem(searchQ)));
        } else {
            let options = {
                method: 'GET',
                url: 'https://imdb8.p.rapidapi.com/auto-complete',
                params: {q: searchQ},
                headers: {
                    'x-rapidapi-host': 'imdb8.p.rapidapi.com',
                    'x-rapidapi-key': '7ca88a94f7mshc945b0237ae404bp160e99jsna1f24f29b59a'
                }
            };

            axios.request(options).then(function (response) {
                if (response.data.d) {
                    setMovies(response.data.d);
                    localStorage.setItem(searchQ, JSON.stringify(response.data.d));
                    console.log(response.data.d);
                }
            }).catch(function (error) {
                console.error(error);
            });
        }
    }

    const handleChangeSearchQ = (search) => {
      setSearchQ(search);
    }

    return (
        <div>
                <MainScreen
                    movies={movies}
                    setFavoriteMovie={setFavoriteMovies}
                    favMovies={favMovies}
                    handleChangeSearchQ={handleChangeSearchQ}
                    handleOpenModal={handleOpenModal}
                />
                <DetailsModal
                    isOpen={isOpen}
                    activeMovie={activeMovie}
                    handleOpenModal={handleOpenModal}
                    handleEditMovie={handleEditMovie}
                />
        </div>
    );
}

export default Movies;
