import React, { useEffect, useState } from "react";
import styled from "styled-components";

const MovieDetail = (props) => {
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
          // 이거는 수정 성공한 뒤로가기
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
    <MainStyle>
      <TitleStyle>Movie Get(Detail) PAGE</TitleStyle>

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
        <ButtonStyle onClick={alertMovie}>수정</ButtonStyle>
      </form>
    </MainStyle>
  );
};

export default MovieDetail;
