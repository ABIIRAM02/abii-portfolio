import Navbar from "@/component/navbar";
import React, { ReactNode } from "react";

function Homelayout({ children }: { children: ReactNode }) {
  return (
    <>
        <Navbar />
        {children}
    </>
  );
}

export default Homelayout;
