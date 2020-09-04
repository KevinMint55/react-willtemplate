import React from 'react';

interface IProps {
  count: number;
}

const Count = (props: IProps) => {
  return (
    <div>
      <h1>哈哈哈</h1>
      当前count值：{props.count}<br />
    </div>
  );
}

export default Count
