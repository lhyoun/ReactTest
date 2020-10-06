import React from "react";
import { Link } from "react-router-dom";

const MovieItem = (props) => {
  const { id, title, rating, medium_cover_image } = props.movie;
  //const key = props.key;

  // 구조 분할 할당
  return (
    <div className="card">
      <img src={medium_cover_image} width="100px" height="100px" />
      <br />
      <br />
      {/* <div> 제목 : {title}</div> */}
      <Link to={`MovieDetail/${id}`}>제목 : {title}</Link>
      <div>id : {id}</div>
      <button onClick={() => props.deleteById(id)}>삭제</button>
      <hr />
    </div>
  );
};

export default MovieItem;
