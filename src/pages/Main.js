import { useState } from "react";
import "../css/Main.css";
import { useNavigate } from "react-router-dom";

function Main() {
  let [listTitle, setListTitle] = useState([
    "나의 인생 기록",
    "위에는 블로그",
    "밑에는 쇼핑몰",
  ]);
  let [like, setLike] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);
  let [modalClose, setModalClose] = useState(0);
  let [modalTitle, setModalTitle] = useState(0);
  let navigate = useNavigate();

  function change() {
    setListTitle(["기록하는 사람", "위에는 블로그", "밑에는 쇼핑몰"]);
  }

  return (
    <>
      <div className="title">Yun Diary</div>
      {listTitle.map(function (title, i) {
        return (
          <div
            className="list"
            onClick={() => {
              setModal(!modal);
              setModalTitle(i);
              navigate("/detail");
            }}
          >
            {title}
            <span
              onClick={() => {
                let likeCopy = [...like];
                likeCopy[i] = likeCopy[i] + 1;
                setLike(likeCopy);
              }}
            >
              ❤
            </span>{" "}
            {like[i]}
            <p>날짜</p>
          </div>
        );
      })}
      {modal === true ? (
        <Modal listTitle={listTitle} change={change} modalTitle={modalTitle} />
      ) : null}
    </>
  );
}

function Modal(props) {
  return (
    <div className="modal-container">
      <div className="modal-content">
        <h1>{props.listTitle[props.modalTitle]}</h1>
        <p>내용</p>
        <p>상세내용</p>
        <button onClick={props.change}>글수정</button>
      </div>
    </div>
  );
}

export default Main;
