
import React, { useState } from 'react';

const Home = () => {
  const [name] = useState<string>('ddd');

  return (
    <div className="home">
      <h1 className="h-txt">{name}!!!!!</h1>
    </div>
  );
};

export default Home;
