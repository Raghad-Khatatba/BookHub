import React from "react";
import { Outlet } from "react-router-dom";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
export default function Home({logout}) {
  return (
    <>
      <Header logout={logout}/>
      <Outlet></Outlet>
      <Footer />
    </>
  );
}
