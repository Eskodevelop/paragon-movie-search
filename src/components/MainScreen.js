import Header from "./Header";
import MoviesList from "./MoviesList";
import FavoritesList from "./FavoritesList";

const MainScreen = (props) => {
    return (
        <div>
            <Header
                handleChangeSearchQ={props.handleChangeSearchQ}
            />
            <div className="row">
                <div className="col-md-8">
                    <MoviesList
                        movies={props.movies}
                        setFavoriteMovies={props.setFavoriteMovie}
                        handleOpenModal={props.handleOpenModal}
                    />
                </div>
                <div className="col-md-4">
                    <FavoritesList
                        favMovies={props.favMovies}
                    />
                </div>
            </div>
        </div>
    );
}

export default MainScreen;
