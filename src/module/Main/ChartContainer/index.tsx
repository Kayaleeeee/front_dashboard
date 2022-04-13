import Chart from 'module/Chart';
import React from 'react';
import styled from 'styled-components';

const ChartContainer = () => {
  return (
    <Wrapper>
      <Title>Chart. Chat. Trade. Repeat</Title>
      <SubTitle>
        Join 30 millions traders and investors making better, brighter decisions
        in the world markets.
      </SubTitle>
      <Chart />
    </Wrapper>
  );
};

export default ChartContainer;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
`;

const Title = styled.h2`
  color: #fff;
  width: 100%;
  display: flex;
  justify-content: center;
  font-size: 60px;
  margin-bottom: 30px;
`;

const SubTitle = styled.p`
  color: #fff;
  width: 100%;
  display: flex;
  justify-content: center;

  font-size: 30px;
  margin: 0 0 3rem 0;
`;
