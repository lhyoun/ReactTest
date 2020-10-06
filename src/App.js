import React from "react";
import { Route } from "react-router-dom";
import Header from "./component/Header";
import MovieDetail from "./pages/MovieDetail";
import MovieList from "./pages/MovieList";
import Register from "./pages/Register";

const App = () => {
  return (
    <div>
      <Header></Header>
      {/* 등록 */}
      <Route path="/Register" exact={true} component={Register}></Route>

      {/* 상세보기 */}
      <Route
        path="/MovieDetail/:id"
        exact={true}
        component={MovieDetail}
      ></Route>

      {/* 리스트 */}
      <Route path="/MovieList" exact={true} component={MovieList}></Route>
    </div>
  );
};

export default App;
