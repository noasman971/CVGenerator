import {useEffect, useState} from "react";

function fetchMovies() {
    const [movieList, setMovieList] = useState([]);

    useEffect(() => {
        const loadMovies = async () => {
            try {
                const res = await fetch("http://localhost:5174/movies.json");
                const data = await res.json();
                setMovieList(data);
                setMovieFiltered(data)
            } catch (e) {
                setError("Impossible de charger les films : " + e);
            } finally {
                setIsLoading(false);
            }
        };
        loadMovies();
    }, []);
}