import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const MovieItem = (props) => {
  // MovieList.js file에서 <MovieItem movie={res} key={res.id} deleteById={deleteById} />
  // 이렇게 사용했는데 props는 movie={res} key={res.id} deleteById={deleteById} 이것들임

  // 영화제목 style
  const MovieTitleStyle = styled.td`
    font-size: 16px;
    font-weight: 600;
  `;

  // 삭제 버튼 style
  const DeleteButtonStyle = styled.button`
    background-color: rgb(255, 100, 100);
    color: white;
    width: 50px;
    height: 20px;
    font-size: 15px;
    font-weight: 700;
    border-radius: 6px;
    /* 가장자리 둥글게 */
    border: 0px;
    cursor: pointer;
    /* 커서 갖다 대면 손 모양으로 바뀜 */
  `;

  // 이거는 그냥 글자랑 삭제버튼 양 끝에 정렬하는 용도
  const ContentStyle = styled.div`
    display: grid;
    grid-template-columns: auto auto;
    justify-content: space-between;
    /* 양 끝 정렬하기 */
    padding: 10px;
  `;

  const { id, title, medium_cover_image } = props.movie;
  // 구조 분할 할당

  return (
    <div>
      <img src={medium_cover_image} width="200px" height="250px" />
      <br />
      <br />
      <ContentStyle>
        {/* 영화제목을 a tag처럼 누르면 상세보기 및 수정가능한 페이지로 이동 */}
        <Link to={`MovieDetail/${id}`}>
          <MovieTitleStyle>{title}</MovieTitleStyle>
        </Link>
        <DeleteButtonStyle onClick={() => props.deleteById(id)}>
          삭제
        </DeleteButtonStyle>
      </ContentStyle>
      <hr />
    </div>
  );
};

export default MovieItem;
