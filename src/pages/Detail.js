import React, { useEffect } from "react";
import styled from "styled-components";
import { useParams, useLocation } from "react-router-dom";
import { useState } from "react";

function Detail() {
//   const { index } = useParams();
//   const [listTitle, setListTitle] = useState(location.state?.listTitle || []);
//   useEffect(() => {
//     // console.log("listTitle:", listTitle);
//     // console.log("index:", index);
//     setListTitle(location.state?.listTitle || []);
//   }, [location.state]);
const{id}= useParams();
const location = useLocation();
const [listTitle,setListTitle] =useState(location.state?.listTitle);
  return (
    <StyledWrapper>
      <Title>Yun Diary</Title>
      <Container>
        <PhotoBox>
          <Photo></Photo>
        </PhotoBox>
        <ContentBox>
          <ContentTitle>{listTitle[id]}</ContentTitle>
          <Content>내용</Content>
        </ContentBox>
      </Container>
    </StyledWrapper>
  );
}

export default Detail;
const StyledWrapper = styled.main`
  width: 100vw;
  height: 100vh;
`;
const Title = styled.header`
  width: 100%;
  height: 10%;
  background-color: #d4e7c5;
  color: #304d30;
  font-size: 45px;
  display: flex;
  padding-left: 30px;
`;
const Container = styled.div`
  display: flex;
  height: 90%;
`;
const PhotoBox = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
`;
const Photo = styled.div`
  height: 90%;
  width: 90%;
  background-image: url("다함께.png");
  background-repeat: no-repeat;
  background-size: contain;
`;

const ContentBox = styled.div`
  width: 70%;
  height: 100%;
`;

const ContentTitle = styled.div`
  width: 100%;
  height: 10%;
  font-size: larger;
  font-weight: bolder;
  background-color: #BBC3A4;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  width: 1000%;
  height: 90%;
  background-color: #B3A398;
`;
