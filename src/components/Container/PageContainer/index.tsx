import React, { FC, HTMLAttributes } from 'react';
import styled from 'styled-components';
import Header from '../../Navigation/Header';

const PageContainer: FC<HTMLAttributes<HTMLDivElement>> = ({
  children,
  ...props
}) => {
  return (
    <Wrapper {...props}>
      <Header />
      {children}
    </Wrapper>
  );
};

export default PageContainer;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  background: black;
  padding-bottom: 10%;
`;
