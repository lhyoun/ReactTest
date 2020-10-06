import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/MovieList">영화목록</Link>
        </li>
        <li>
          <Link to="/Register">영화등록</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
