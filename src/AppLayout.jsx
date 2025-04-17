import React from "react";
import { Outlet } from "react-router-dom";
import { Footer, Header } from "./components/layout";

const AppLayout = () => {
  return (
    <>
      <Header />
      <main className="pt-20">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default AppLayout;