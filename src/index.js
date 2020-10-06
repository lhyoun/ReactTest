import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,

  document.getElementById("root")
);

// App.js는 라우터 역할
// BrowserRouter import주의
// 해당 project의 위치에서 npm i react-router-dom
// 하면 lib 다운로드 가능
