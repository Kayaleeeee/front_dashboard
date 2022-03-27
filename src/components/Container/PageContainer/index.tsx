import React, { FC, HTMLAttributes } from 'react';
import styled from 'styled-components';

const PageContainer: FC<HTMLAttributes<HTMLDivElement>> = ({
  children,
  ...props
}) => {
  return <Wrapper {...props}>{children}</Wrapper>;
};

export default PageContainer;

const Wrapper = styled.div`
  width: 100%;
  max-width: 800px;
`;
