import React from "react";
import { Outlet } from "react-router-dom";

import VerticalWrapper from "../../atoms/verticalWrapper";

import Header from "../header/Header";
import Footer from "../footer/Footer";

export default function Template() {
  return (
    <VerticalWrapper>
      <Header />
      <Outlet /> {/* CHILDREN  */}
      <Footer />
    </VerticalWrapper>
  );
}
