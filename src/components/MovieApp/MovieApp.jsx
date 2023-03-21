import React, { useEffect, useState } from "react";
import "./MovieApp.css";
import SearchIcon from "./Search.svg";
import MovieCard from "./MovieCard";

const API_URL = "http://www.omdbapi.com?apikey=a0169138";

const Movie1 = {
    Title: "Spiderman the Verse",
    Year: "2019–",
    imdbID: "tt12122034",
    Type: "series",
    Poster: "https://m.media-amazon.com/images/M/MV5BNjA2NmZhOGEtZTQ5OS00MDI0LTg4N2UtYTRmOTllM2I2NDlhXkEyXkFqcGdeQXVyNTU4OTE5Nzc@._V1_SX300.jpg",
};

const MovieApp = () => {
    const [movies, setMovies] = useState([]);

    const [searchTerm, setSearchTerm] = useState("");

    const SearchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        setMovies(data.Search);
    };

    useEffect(() => {
        SearchMovies({ movies });
    }, []);
    return (
        <div className="app">
            <h1>MovieLand</h1>
            <div className="search">
                <input
                    type="text"
                    placeholder="Search For Movies"
                    value={searchTerm}
                    onChange={(e) => {
                        setSearchTerm(e.target.value);
                    }}
                />
                <img
                    src={SearchIcon}
                    alt="search"
                    onClick={() => SearchMovies(searchTerm)}
                />
            </div>
            {movies?.length > 0 ? (
                <div className="container">
                    {movies.map((movie) => (
                        <MovieCard key={movie.imdbID} Movie={movie} />
                    ))}
                </div>
            ) : (
                <div className="empty">
                    <h2>No Movies Found</h2>
                </div>
            )}
        </div>
    );
};

export default MovieApp;
