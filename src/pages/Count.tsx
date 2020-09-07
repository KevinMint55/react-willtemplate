import React, { useState } from 'react';
import Test from 'Components/Test';

const Count = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount((preCount) => preCount + 1);
  };

  return (
    <div>
      当前count值：{count}<br />
      <button style={{ border: '1px dashed blue' }} onClick={handleClick}>增加1</button>
      <Test count={count}></Test>
    </div>
  );
};

export default Count;
