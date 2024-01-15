import React from 'react';
import { Link, Outlet } from 'react-router-dom';

export const App = () => {
  const [count, setCount] = React.useState(0);
  const increment = () => setCount(value => value + 1);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', alignItems: 'start' }}>
      <h1>ADMIN MODULE</h1>
      <Outlet />
    </div>
  );
};
