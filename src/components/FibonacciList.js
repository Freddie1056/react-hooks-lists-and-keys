import React from 'react';

const fib = [0, 1, 1, 2, 3, 5];

const FibonacciList = () => {
  const fibList = fib.map((number, index) => (
    <div key={index}>{number}</div>
  ));

  return (
    <div>
      {fibList}
    </div>
  );
};

export default FibonacciList;
