import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

function Main() {
  let [listTitle, setListTitle] = useState([
    "나의 인생 기록",
    "위에는 블로그",
    "밑에는 쇼핑몰",
  ]);
  let [like, setLike] = useState([0, 0, 0]);
  // let [modal, setModal] = useState(false);
  // let [modalClose, setModalClose] = useState(0);
  // let [modalTitle, setModalTitle] = useState(0);
  let navigate = useNavigate();
  let { index } = useParams();

  function change() {
    setListTitle(["기록하는 사람", "위에는 블로그", "밑에는 쇼핑몰"]);
  }

  return (
    <>
      <Title>Yun Diary</Title>
      {listTitle.map(function (title, i) {
        return (
          <List 
            key={i}
            onClick={() => {
              navigate(`/detail/${i}`, { state: { listTitle: listTitle } });
              
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
          </List>
        );
      })}
      {/* {modal === true ? (
        <Modal listTitle={listTitle} change={change} modalTitle={modalTitle} />
      ) : null} */}
    </>
  );
}

// function Modal(props) {
//   return (
//     <ModalContainer>
//       <ModalContent>
//         <h1>{props.listTitle[props.modalTitle]}</h1>
//         <p>내용</p>
//         <p>상세내용</p>
//         <button onClick={props.change}>글수정</button>
//       </ModalContent>
//     </ModalContainer>
//   );
// }

export default Main;

const Title = styled.div`
  width: 100%;
  height: 80px;
  background-color: #d4e7c5;
  color: #304d30;
  font-size: 45px;
  display: flex;
  padding-left: 30px;
`;

const List = styled.div`
  border-bottom: 1px solid #99bc85;
`;

const ModalContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f9efdb;
  width: 50%;
  height: 400px;
`;
