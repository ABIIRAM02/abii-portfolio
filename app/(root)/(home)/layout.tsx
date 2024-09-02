import Nav from "@/component/Nav";
import React, { ReactNode } from "react";

function Homelayout({ children }: { children: ReactNode }) {
  return (
    <>
        {children}
    </>
  );
}

export default Homelayout;
