import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import App from "../App";
import MovieList from "./MovieList";

const MovieDetail = (props) => {
  const [movie, setMovie] = useState({
    title: "",
    rating: null,
    summary: "",
    medium_cover_image: "",
  });

  console.log(props.match.params.id);

  const inputHandle = (e) => {
    setMovie({
      ...movie,
      [e.target.name]: e.target.value,
    });
  };

  // 수정, 버튼
  const alertMovie = (e) => {
    e.preventDefault(); // event 방지
    console.log(movie);

    fetch(`http://10.100.102.2:8000/api/movie/${props.match.params.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(movie),
    })
      .then((res) => res.status)
      .then((res) => {
        if (res === 200) {
          alert("수정 성공");
          props.history.push("/");
        }
      });
  };

  useEffect(() => {
    fetch(`http://10.100.102.2:8000/api/movie/${props.match.params.id}`, {
      method: "get",
    })
      .then((res) => {
        console.log(1, res);
        return res.json();
      })
      .then((res) => {
        console.log(2, res);
        setMovie(res);
      });
  }, []);

  return (
    <div>
      <form>
        제목
        <input
          type="text"
          name="title"
          placeholder="title"
          onChange={inputHandle}
          value={movie.title}
        />
        <br />
        점수
        <input
          type="text"
          name="rating"
          placeholder="rating"
          onChange={inputHandle}
          value={movie.rating}
        />
        <br />
        요약
        <input
          type="text"
          name="summary"
          placeholder="summary"
          onChange={inputHandle}
          value={movie.summary}
        />
        <br />
        사진
        <input
          type="text"
          name="medium_cover_image"
          placeholder="medium_cover_image"
          onChange={inputHandle}
          value={movie.medium_cover_image}
        />
        <br />
        <button onClick={alertMovie}>수정</button>
        {/* <button onClick={reset}>리셋</button> */}
      </form>
    </div>
  );
};

export default MovieDetail;
