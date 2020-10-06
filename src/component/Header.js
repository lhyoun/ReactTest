import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  const MenuStyle = styled.ul`
    display: grid;
    grid-template-columns: auto auto;
    grid-gap: 30px;
    list-style-type: none;
    /* li에 o사라짐 */
    color: white;
    font-weight: 800;
    /* 진하기 */
  `;

  const NavStyle = styled.div`
    display: grid;
    grid-template-columns: auto auto;
    justify-content: space-between;
    /* 정렬하기 */
    padding: 10px;
  `;

  return (
    <NavStyle>
      <MenuStyle>
        <li>
          <Link to="/MovieList">영화목록</Link>
        </li>
        <li>
          <Link to="/Register">영화등록</Link>
        </li>
      </MenuStyle>
    </NavStyle>
  );
};

export default Header;
