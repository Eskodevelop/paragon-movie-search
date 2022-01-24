import React from "react";

const FavoritesList = (props) => {
    return (
        <ul className="list-group">
            {
                props.favMovies && props.favMovies.length > 0 && props.favMovies.map((item, i) => {
                    return(<li className="list-group-item">{item.l}</li>)
                })
            }
        </ul>
    );
}

export default FavoritesList;
