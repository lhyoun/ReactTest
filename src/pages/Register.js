import React, { useState } from "react";

const Register = () => {
  const [movie, setMovie] = useState({
    title: "",
    rating: null,
    summary: "",
    medium_cover_image: "",
  });

  const inputHandle = (e) => {
    setMovie({
      ...movie,
      [e.target.name]: e.target.value,
    });
  };

  const submitMovie = (e) => {
    e.preventDefault(); // event 방지
    console.log(movie);

    fetch("http://10.100.102.2:8000/api/movie", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(movie),
    })
      .then((res) => res.status)
      .then((res) => {
        if (res === 200) {
          console.log("저장 성공");
        }
      });
  };

  const reset = (e) => {
    e.preventDefault(); // event 방지
    setMovie({
      title: "",
      rating: null,
      summary: "",
      medium_cover_image: "",
    });
  };

  return (
    <div>
      <form>
        <input
          type="text"
          name="title"
          placeholder="title"
          onChange={inputHandle}
          value={movie.title}
        />
        <br />
        <input
          type="text"
          name="rating"
          placeholder="rating"
          onChange={inputHandle}
          value={movie.rating}
        />
        <br />
        <input
          type="text"
          name="summary"
          placeholder="summary"
          onChange={inputHandle}
          value={movie.summary}
        />
        <br />
        <input
          type="text"
          name="medium_cover_image"
          placeholder="medium_cover_image"
          onChange={inputHandle}
          value={movie.medium_cover_image}
        />
        <br />
        <button onClick={submitMovie}>등록</button>
        {/* <button onClick={reset}>리셋</button> */}
      </form>
    </div>
  );
};

export default Register;
