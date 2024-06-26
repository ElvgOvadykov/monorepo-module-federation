import React from "react";
import { Link, Outlet } from "react-router-dom";
import { adminRoutes } from "@packages/shared/src/routes/admin";
import { shopRoutes } from "@packages/shared/src/routes/shop";
import { Card } from "shop/Card";

export const App = () => {
  const [count, setCount] = React.useState(0);
  const increment = () => setCount((value) => value + 1);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "15px",
        alignItems: "start",
      }}
    >
      <h1>Page</h1>
      <Card name="Keyboard" price={30} description="description-description" />
      <Link to={adminRoutes.main}>about</Link>
      <br />
      <Link to={shopRoutes.main}>shop</Link>
      <Outlet />
    </div>
  );
};
