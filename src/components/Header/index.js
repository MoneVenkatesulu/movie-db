import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState, useContext } from "react";

import SearchedMovieContext from "../../context/SearchedMovieContext";

import "./index.css";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [userSearch, setUserSearch] = useState("");
  const { updateSearchedMovie, changePage } = useContext(SearchedMovieContext);
  const pathName = location.pathname;

  const onClickSearchIcon = () => {
    updateSearchedMovie(userSearch);
    changePage(1);
    navigate("/searched-movies");
  };

  const onEnterUserSearch = (e) => {
    if (e.key === "Enter") {
      updateSearchedMovie(userSearch);
      changePage(1);
      navigate("/searched-movies");
    }
  };

  return (
    <nav className="nav-container responsive-padding">
      <div className="header-title-link-container">
        <Link to="/" className="app-title-link">
          <h1 className="app-title">movieDB</h1>
        </Link>

        <ul className="header-link-container">
          <li>
            <Link
              to="/"
              className="header-link-item"
              onClick={() => changePage(1)}
              style={{
                fontWeight: `${pathName === "/" ? "bold" : "normal"}`,
                color: `${pathName === "/" ? "#00bb00" : "#00ff00"}`,
              }}
            >
              Popular
            </Link>
          </li>
          <li>
            <Link
              to="/top-rated"
              className="header-link-item"
              onClick={() => changePage(1)}
              style={{
                fontWeight: `${pathName === "/top-rated" ? "bold" : "normal"}`,
                color: `${pathName === "/top-rated" ? "#00bb00" : "#00ff00"}`,
              }}
            >
              Top Rated
            </Link>
          </li>
          <li>
            <Link
              to="/upcoming"
              className="header-link-item"
              onClick={() => changePage(1)}
              style={{
                fontWeight: `${pathName === "/upcoming" ? "bold" : "normal"}`,
                color: `${pathName === "/upcoming" ? "#00bb00" : "#00ff00"}`,
              }}
            >
              Upcoming
            </Link>
          </li>
        </ul>
      </div>

      <div className="searchbar-container">
        <input
          type="text"
          name="userSearch"
          placeholder="Movie Name"
          className="searchbar"
          value={userSearch}
          onChange={(e) => setUserSearch(e.target.value)}
          onKeyDown={onEnterUserSearch}
        />
        <button
          type="button"
          className="search-btn"
          onClick={onClickSearchIcon}
        >
          Search
        </button>
      </div>
    </nav>
  );
};
export default Header;
