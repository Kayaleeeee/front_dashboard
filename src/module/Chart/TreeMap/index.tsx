import React from 'react';
import { Treemap } from 'recharts';
import Content from './Content';
import { treeMapData } from './data';

const TreeMap = () => {
  return (
    <>
      <h1>Treemap Data</h1>
      <Treemap
        width={600}
        height={400}
        data={treeMapData}
        dataKey='size'
        stroke='#fff'
        fill='#8884d8'
        content={<Content />}
      />
    </>
  );
};

export default TreeMap;
