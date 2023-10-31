import React from "react";
import { Outlet } from "react-router-dom";

import VerticalWrapper from "../../atoms/verticalWrapper";

import Header from "../header/Header";
import Footer from "../footer/Footer";
import MobileHeaderView from "../mobileHeaderView";

export default function Template() {
  return (
    <VerticalWrapper>
      <Header /> {/* HEADER ONLY ON DESKTOP VIEW/ */}
      <MobileHeaderView /> {/* HEADER ONLY ON MOBILE VIEW/ */}
      <Outlet /> {/* CHILDREN  */}
      <Footer />
    </VerticalWrapper>
  );
}
