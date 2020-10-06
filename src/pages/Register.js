import React, { useState } from "react";
import styled from "styled-components";

const TitleStyle = styled.div`
  padding: 10px 0px;
  font-size: 30px;
  font-weight: 800;
  color: rgb(70, 70, 70);
`;

// 등록하기 버튼 스타일
const ButtonStyle = styled.button`
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

// 입력창 스타일
const InputStyle = styled.input`
  height: 50%;
  width: 50%;
  color: rgb(100, 100, 100);
  font-size: 15px;
  border: 1px solid rgb(230, 230, 230);
`;

const MainStyle = styled.div`
  margin: 30px 5%;
`;

const SubTitleStyle = styled.td`
  padding: 10px 0px;
  font-size: 12px;
  font-weight: 600;
`;

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
      // 어느 입력창에서 호출되냐에 따라서 target.value를 대입하는 왼쪽애가 바뀜
    });
  };

  const submitMovie = (e) => {
    e.preventDefault(); // event 방지

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
      <TitleStyle>Movie Register PAGE</TitleStyle>

      <SubTitleStyle>Title</SubTitleStyle>
      <form>
        <InputStyle
          type="text"
          name="title"
          placeholder="title"
          onChange={inputHandle}
          value={movie.title}
        />
        <br />
        <SubTitleStyle>Rating</SubTitleStyle>
        <InputStyle
          type="text"
          name="rating"
          placeholder="rating"
          onChange={inputHandle}
          value={movie.rating}
        />
        <br />

        <SubTitleStyle>Summary</SubTitleStyle>
        <InputStyle
          type="text"
          name="summary"
          placeholder="summary"
          onChange={inputHandle}
          value={movie.summary}
        />
        <br />

        <SubTitleStyle>Medium_cover_image</SubTitleStyle>
        <InputStyle
          type="text"
          name="medium_cover_image"
          placeholder="medium_cover_image"
          onChange={inputHandle}
          value={movie.medium_cover_image}
        />
        <br />
        <br />
        <ButtonStyle onClick={submitMovie}>등록</ButtonStyle>
        {/* <button onClick={reset}>리셋</button> */}
      </form>
    </MainStyle>
  );
};

export default Register;
