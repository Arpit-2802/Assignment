import React from "react";
import { Outlet } from "react-router-dom";
import TopBar from "./TopBar";

function Root() {
  return (
    <>
      <TopBar />
      <Outlet />
    </>
  );
}

export default Root;
