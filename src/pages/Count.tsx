import React, { useState } from 'react';
import Test from 'Components/Test';

export default () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count => count + 1);
  };

  return (
    <div>
      当前count值：{count}<br />
      <button style={{ border: '1px dashed blue' }} onClick={handleClick}>增加1</button>
      <Test count={count}></Test>
    </div>
  );
};
