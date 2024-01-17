"use client";
import Header from "@/Components/Header";
import MobileWarning from "@/Components/MobileWarning ";
import React from "react";
import { isMobile } from "react-device-detect";

const Home = () => {
  return (
    <>
      {isMobile ? (
        <MobileWarning />
      ) : (
        <>
          <Header />
        </>
      )}
    </>
  );
};

export default Home;
