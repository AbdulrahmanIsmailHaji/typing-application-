"use client";

import React from "react";
import Navbar from "@/Components/NavBar";
import "../app/globals.css";
import { NextAuthProvider } from "../app/Providers";

import { isMobile } from "react-device-detect";
import MobileWarning from "./MobileWarning ";

const Main = ({ children }) => {
  return (
    <>
      {isMobile ? (
        <MobileWarning />
      ) : (
        <>
          <NextAuthProvider>
            <div className="max-w-3xl mx-auto">
              <Navbar />
              {children}
            </div>
          </NextAuthProvider>
        </>
      )}
    </>
  );
};

export default Main;
