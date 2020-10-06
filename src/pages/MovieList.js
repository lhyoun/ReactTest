import React, { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import MovieItem from "../component/MovieItem";
import MovieDetail from "./MovieDetail";

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("http://10.100.102.2:8000/api/movie", {
      method: "get",
    })
      .then((res) => {
        console.log(1, res);
        return res.json();
      })
      .then((res) => {
        console.log(2, res);
        setMovies(res);
      });
  }, []);

  function deleteById(id) {
    //alert(`${id} 삭제`);

    fetch(`http://10.100.102.2:8000/api/movie/${id}`, {
      method: "DELETE",
    })
      .then(function (res) {
        console.log(res);
        return res.status;
      })
      .then(function (res) {
        console.log(res);
        if (res === 200) {
          alert(`${id} 삭제 성공`);
          setMovies(movies.filter((value) => value.id !== id));
        } else {
          alert("err");
        }
      });
  }

  return (
    <div>
      {movies.map((res) => (
        <MovieItem movie={res} key={res.id} deleteById={deleteById} />
      ))}
    </div>
  );
};

export default MovieList;
