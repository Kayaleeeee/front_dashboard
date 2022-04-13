import React from 'react';
import styled from 'styled-components';
import BackgroundImage1Src from 'images/background_1.jpeg';

const MainImageContainer = () => {
  return (
    <Wrapper backgroundSrc={BackgroundImage1Src}>
      <TitleWrapper>
        <Title>torit</Title>
        <SubTitle>SubTitle: 미정</SubTitle>
      </TitleWrapper>
    </Wrapper>
  );
};

export default MainImageContainer;

const Wrapper = styled.div<{ backgroundSrc: string }>`
  position: relative;
  width: 100vw;
  height: 55vh;
  background: url(${({ backgroundSrc }) => backgroundSrc});
  background-size: cover;
  background-position: center;
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 30%;
  left: 18%;
`;

const Title = styled.h1`
  font-family: 'Yeseva One', cursive;
  width: 100%;
  font-size: calc(50px + 5vw);
  margin: 0;
`;

const SubTitle = styled.h3`
  width: 100%;
  margin: 0;
  font-size: calc(20px + 2vw);

  font-weight: 800;
  color: transparent;
  -webkit-text-stroke: 0.1vw black;
  margin-top: -23px;
  margin-left: 20px;
`;
