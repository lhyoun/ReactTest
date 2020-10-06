import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  /* 스타일 컴포넌트를 사용하려면 터미널에서 npm install --save styled-components */
  const MenuStyle = styled.ul`
    display: grid;
    grid-template-columns: auto auto;
    /* 한 줄에 2개씩 */
    grid-gap: 30px;
    /* 각각의 사이의 거리는 30px */
    list-style-type: none;
    /* li에 앞에 o사라짐 */
    color: white;
    font-weight: 800;
    /* 진하기 */
    justify-content: left;
    /* Header에 클릭할 수 있는 단어가 두개가 있는데 걔들을 왼쪽 정렬 */
    /* 이 아래 코드는 단어 두개 감싸는 그림자있는 사각형? 그냥 장식용 */
    display: inline-block;
    position: relative;
    /*  박스와 박스가 겹칠 때 물 흐르듯이 내려가는.. default: static 
        새로운 박스가 들어왔을 때 relative는 자기 이전의 애랑 관계를 정의해서 뭐.. 마진 대신 사용. 띄우기 위해(겹칠 수도 있다)*/
    top: 10px;
    left: 30px;
    /* 이 두 속성은(top,left) static에서는 줄 수 없다 */
    padding: 20px 30px;
    /* 세로 가로 각각 들어감 20 30 20 30이랑 같음(12, 3, 6 ,9) */
    box-shadow: 0 2px 2px 0 rgb(214, 214, 214);
  `;

  return (
    <MenuStyle>
      {/* 위에서 만들어 놓은 ul양식을 사용 */}
      <li>
        <Link to="/MovieList">MovieList</Link>
      </li>
      {/* a tag라고 생각해도 무방. to 다음 주소랑 App.js에서 설정해놓은 주소랑 같은 곳으로? 이동 */}
      <li>
        <Link to="/Register">MovieRegister</Link>
      </li>
    </MenuStyle>
  );
};

export default Header;
