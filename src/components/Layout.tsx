import { FC } from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import Container from "@mui/material/Container";

const Layout: FC = () => {
  return (
    <div>
      <Header />
      <Container sx={{ mt: "1rem" }}>
        <Outlet />
      </Container>
    </div>
  );
};

export default Layout;
