import ChartContainer from 'module/Main/ChartContainer';
import MainImageContainer from 'module/Main/ImageContainer';
import React from 'react';
import PageContainer from '../../components/Container/PageContainer';

const MainPage = () => {
  return (
    <PageContainer>
      <MainImageContainer />
      <ChartContainer />
    </PageContainer>
  );
};

export default MainPage;
