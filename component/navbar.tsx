import Link from "next/link";
import React from "react";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <section className="bg-myGray p-[8px] px-[18px] flex justify-between items-center rounded-[18px] text-[14px] w-2/5  hover:cursor-pointer border border-white/[0.1]">
    <div className="flex gap-3 items-center font-bold" >
      <img
        src="https://avatar.iran.liara.run/public/boy?username=abi"
        alt="profile"
        className="w-7"
      />
      <p>Abiram</p>
    </div>
    <p className="hover:bg-myLightGray p-2 rounded-xl transition duration-200" >About</p>
    <p className="hover:bg-myLightGray p-2 rounded-xl transition duration-200" >Contact</p>
  </section>
  );
};

export default Navbar;
