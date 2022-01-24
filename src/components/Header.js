import React from "react";
import SearchBar from "./SearchBar";

const Header = (props) => {
    return (
        <nav className="navbar navbar-light bg-light">
                PARAGON MOVIE APP
              <SearchBar
                  handleChangeSearchQ={props.handleChangeSearchQ}
              />
        </nav>
    );
}

export default Header;
