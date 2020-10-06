import React, { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import styled from "styled-components";
import MovieItem from "../component/MovieItem";
import MovieDetail from "./MovieDetail";

const MovieList = () => {
  const MovieCardStyle = styled.div`
    /* 카드 5개를 감싸는 div */
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 5%;
    height: 300px;
  `;

  const SearchTitleStyle = styled.div`
    padding: 10px 0px;
    font-size: 30px;
    font-weight: 800;
    color: rgb(70, 70, 70);
  `;

  const MainStyle = styled.div`
    margin: 30px 5%;
    /* main 전체에 마진 아래 두개는 나중에 지우기 */
    /* border: 1px solid red;*/
  `;

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
    <MainStyle>
      <SearchTitleStyle>Movie List PAGE</SearchTitleStyle>
      <MovieCardStyle>
        {movies.map((res) => (
          <MovieItem movie={res} key={res.id} deleteById={deleteById} />
        ))}
      </MovieCardStyle>
    </MainStyle>
  );
};

export default MovieList;
