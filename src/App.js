import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  let [listTitle, setListTitle] = useState([
    "나의 인생 기록",
    "위에는 블로그",
    "밑에는 쇼핑몰",
  ]);
  let [like, setLike] = useState(0);
  let [modal, setModal] = useState(false);

  return (
    <div className="App">
      <div className="title">Yun Diary</div>
      <div className="list">
        <h4>
          {listTitle[0]}{" "}
          <span
            onClick={() => {
              setLike(like + 1);
            }}
          >
            ❤
          </span>{" "}
          {like}
        </h4>

        <p>날짜</p>
        <span
          onClick={() => {
            setListTitle(["나의 계획은", "위에는 블로그", "밑에는 쇼핑몰"]);
          }}
        >
          글수정
        </span>
      </div>
      <div className="list">
        {listTitle[1]}
        <p>날짜</p>
      </div>
      <div className="list" onClick={()=>{setModal(true)}}>
        {listTitle[2]}
        <p>날짜</p>
      </div>
      {modal === true ? <Modal /> : null}
    </div>
  );
}

function Modal() {
  return (
    <div className="modal-container">
      <div className="modal-content">
      <h1>제목</h1>
      <p>내용</p>
      <p>상세내용</p>
    </div>

    </div>
    
  );
}

export default App;
