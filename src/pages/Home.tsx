
import React, { useState } from 'react';

interface IProps { }

export default (props: IProps) => {
  const [name] = useState('hahahaha');

  return (
    <div className="home">
      <h1 className="h-txt">{name}!!!!!</h1>
    </div>
  );
};
