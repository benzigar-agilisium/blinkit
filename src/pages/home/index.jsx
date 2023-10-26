import React from "react";
import { Outlet } from "react-router-dom";

import VerticalWrapper from "../../atoms/verticalWrapper";

import Header from "../../organisms/header/Header";
import Footer from "../../organisms/footer/Footer";

export default function Home() {
  return (
    <VerticalWrapper>
      <Header />
      {/* CHILDREN WILL BE RENDERED HERE  */}
      <Outlet />
      <Footer />
    </VerticalWrapper>
  );
}
