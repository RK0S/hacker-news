import { Routes, Route, Navigate } from "react-router-dom";
import { RouteNames, routes } from "../routes";
import Layout from "./Layout";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {routes.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
        <Route path="*" element={<Navigate to={RouteNames.MAIN} />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
