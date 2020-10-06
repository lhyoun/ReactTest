import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const MovieItem = (props) => {
  const DeleteButtonStyle = styled.button`
    background-color: rgb(255, 100, 100);
    color: white;
    width: 50px;
    height: 20px;
    font-size: 15px;
    font-weight: 700;
    border-radius: 6px;
    border: 0px;

    cursor: pointer;
  `;

  const NavStyle = styled.div`
    display: grid;
    grid-template-columns: auto auto;
    justify-content: space-between;
    /* 정렬하기 */
    padding: 10px;
  `;

  const { id, title, rating, medium_cover_image } = props.movie;
  //const key = props.key;

  // 구조 분할 할당
  return (
    <div className="card">
      <img src={medium_cover_image} width="100px" height="100px" />
      <br />
      <br />
      {/* <div> 제목 : {title}</div> */}

      <NavStyle>
        <Link to={`MovieDetail/${id}`}>제목 : {title}</Link>
        <DeleteButtonStyle onClick={() => props.deleteById(id)}>
          삭제
        </DeleteButtonStyle>
      </NavStyle>
      <hr />
    </div>
  );
};

export default MovieItem;
