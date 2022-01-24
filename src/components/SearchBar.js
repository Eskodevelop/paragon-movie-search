import {useState} from "react";

const SearchBar = (props) => {

    const [movieN, setMovieN] = useState("");

    const handleChange = (e) => {
        setMovieN(e.target.value);
    }

    const update = (e) => {
        setMovieN("");
      props.handleChangeSearchQ(movieN);
    }

    const isOnEnter = (e) => {
        if (e.key === 'Enter') {
            update(e);
        }
    }

    return (
        <div style={{float:'right'}}>
            <input onKeyDown={(e) =>isOnEnter(e)} onChange={(event) => handleChange(event)} className="form-control mr-sm-2" type="search" value={movieN} placeholder="Traži film" aria-label="Search"/>
                <button className="btn btn-outline-success my-2 my-sm-0" onClick={update}>Search</button>
        </div>
    );
}

export default SearchBar;
