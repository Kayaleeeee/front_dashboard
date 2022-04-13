import React from 'react';
import LineGraph from './LineGraph';
import styled from 'styled-components';

const Chart = () => {
  return (
    <Wrapper>
      <LineGraph />
      {/* <TreeMap /> */}
    </Wrapper>
  );
};

export default Chart;

const Wrapper = styled.div`
  margin: 30px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
`;
