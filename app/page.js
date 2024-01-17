import Header from "@/Components/Header";
import MobileWarning from "@/Components/MobileWarning ";
import React from "react";
import { isMobile } from "react-device-detect";

const Home = () => {
  console.log("isMobile:", isMobile);
  return (
    <>
      {isMobile ? (
        <MobileWarning />
      ) : (
        <>
          <Header />
          <p>Desktop Content</p>
        </>
      )}
    </>
  );
};

export default Home;
