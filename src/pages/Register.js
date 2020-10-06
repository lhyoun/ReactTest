import React, { useState } from "react";
import styled from "styled-components";

const Register = () => {
  const SearchTitleStyle = styled.div`
    padding: 10px 0px;
    font-size: 30px;
    font-weight: 800;
    color: rgb(70, 70, 70);
  `;

  const SearchButtonStyle = styled.button`
    background-color: rgb(100, 100, 100);
    color: white;
    width: 70px;
    height: 45px;
    font-size: 15px;
    font-weight: 700;
    border-radius: 6px;
    border: 0px;
    cursor: pointer;
  `;

  const SearchInputStyle = styled.input`
    height: 50%;
    width: 50%;
    color: rgb(100, 100, 100);
    font-size: 15px;
    border: 1px solid rgb(230, 230, 230);
  `;

  const MainStyle = styled.div`
    margin: 30px 5%;
    /* main 전체에 마진 아래 두개는 나중에 지우기 */
    /* border: 1px solid red;*/
  `;

  const SearhSubTitleStyle = styled.td`
    padding: 10px 0px;
    font-size: 12px;
    font-weight: 600;
  `;

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
    <MainStyle>
      <SearchTitleStyle>Movie Register PAGE</SearchTitleStyle>

      <SearhSubTitleStyle>Title</SearhSubTitleStyle>
      <form>
        <SearchInputStyle
          type="text"
          name="title"
          placeholder="title"
          onChange={inputHandle}
          value={movie.title}
        />
        <br />
        <SearhSubTitleStyle>Rating</SearhSubTitleStyle>
        <SearchInputStyle
          type="text"
          name="rating"
          placeholder="rating"
          onChange={inputHandle}
          value={movie.rating}
        />
        <br />

        <SearhSubTitleStyle>Summary</SearhSubTitleStyle>
        <SearchInputStyle
          type="text"
          name="summary"
          placeholder="summary"
          onChange={inputHandle}
          value={movie.summary}
        />
        <br />

        <SearhSubTitleStyle>Medium_cover_image</SearhSubTitleStyle>
        <SearchInputStyle
          type="text"
          name="medium_cover_image"
          placeholder="medium_cover_image"
          onChange={inputHandle}
          value={movie.medium_cover_image}
        />
        <br />
        <br />
        <SearchButtonStyle onClick={submitMovie}>등록</SearchButtonStyle>
        {/* <button onClick={reset}>리셋</button> */}
      </form>
    </MainStyle>
  );
};

export default Register;
