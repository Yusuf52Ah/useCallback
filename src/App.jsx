import React, { useState, useCallback } from 'react';

const Button = React.memo(({ onClick }) => {
  console.log('Button render boldi');
  return <button onClick={onClick}>Increment</button>;
});

export default function App() {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount(prev => prev + 1);
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Count: {count}</h2>
      <Button onClick={increment} />
    </div>
  );
}