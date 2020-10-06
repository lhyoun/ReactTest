import React, { useEffect, useState } from "react";
import styled from "styled-components";
import MovieItem from "../component/MovieItem";

const MovieList = () => {
  const MovieCardStyle = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 5%;
    height: 300px;
    /* 한 줄에 4개씩 각각의 간격은 전체 가로길이의 5%, 한 영화 정보당 높이는 300px */
  `;

  const TitleStyle = styled.div`
    padding: 10px 0px;
    font-size: 30px;
    font-weight: 800;
    color: rgb(70, 70, 70);
    /* Title 글자에 대한 스타일 양식 */
  `;

  const MainStyle = styled.div`
    margin: 30px 5%;
    /* 타이틀과 영화정보 전체를 감싸는 div, margin 주는 용도 */
  `;

  const [movies, setMovies] = useState([]);
  // 영화 정보들을 state로 지정

  useEffect(() => {
    // 해당 페이지에 진입했을 때 한 번만 실행
    fetch("http://10.100.102.2:8000/api/movie", {
      method: "get",
    }) // 위 주소에서 데이터를 받아와서
      .then((res) => {
        return res.json();
      }) // 받아온 데이터를 json type으로 바꿔서
      .then((res) => {
        setMovies(res);
      }); // state 변수에 넣어준다
  }, []);

  function deleteById(id) {
    // 삭제 버튼을 눌렀을 때 동작하는 함수
    fetch(`http://10.100.102.2:8000/api/movie/${id}`, {
      // 매개변수로 입력받은 아이디에 해당하는 내용을 지우는 요청을 한다
      method: "DELETE",
    })
      .then(function (res) {
        return res.status;
      })
      // response 중에 status를 넘겨준다
      .then(function (res) {
        // 삭제가 완료되면 status 200을 받았을 것이다. 즉, 200이면 삭제 성공
        if (res === 200) {
          alert(`${id} 삭제 성공`);
          setMovies(movies.filter((value) => value.id !== id));
          // state(movies배열)에서 삭제한 영화는 제외하기 위해 filter를 사용해 걸러줌
        } else {
          alert("err");
          // 200을 제외한 다른 status를 받으면 err message
        }
      });
  }

  return (
    <MainStyle>
      <TitleStyle>Movie List PAGE</TitleStyle>
      <MovieCardStyle>
        {movies.map((res) => (
          <MovieItem movie={res} key={res.id} deleteById={deleteById} />
        ))}
      </MovieCardStyle>
    </MainStyle>
  );
};

export default MovieList;
