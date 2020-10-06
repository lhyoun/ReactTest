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
      {/* index.css가 App을 호출함으로써 화면에 표시되는 목록은 Header 뿐
      아래의 Route들은 Header의 목록 중 하나를 선택했을 때 어디로 가는지 지정해줌*/}

      {/* 등록 페이지 */}
      <Route path="/Register" exact={true} component={Register}></Route>

      {/* 상세보기 페이지*/}
      <Route
        path="/MovieDetail/:id"
        exact={true}
        component={MovieDetail}
      ></Route>

      {/* 리스트 페이지 */}
      <Route path="/MovieList" exact={true} component={MovieList}></Route>
    </div>
  );
};

export default App;
