import React from "react";
import { IoMenu } from "react-icons/io5";

const Nav = () => {
  return (
    <main>
        
      <section className="hidden bg-myGray p-[8px] px-[18px] lg:flex  justify-between items-center rounded-[18px] text-[14px] w-2/6 hover:cursor-pointer border border-white/[0.1]">
        <div className="flex gap-3 items-center font-bold">
          <img
            src="https://avatar.iran.liara.run/public/boy?username=abi"
            alt="profile"
            className="w-7"
          />
          <p>Abiram</p>
        </div>
        <p className="hover:bg-myLightGray p-2 rounded-xl transition duration-200">
          About
        </p>
        <p className="hover:bg-myLightGray p-2 rounded-xl transition duration-200">
          Contact
        </p>
      </section>

        {/* mobile nav view */}
      <section className="lg:hidden flex justify-between items-center">
        <div className=" flex gap-3 items-center font-bold">
          <img
            src="https://avatar.iran.liara.run/public/boy?username=abi"
            alt="profile"
            className="w-7"
          />
          <p>Abiram</p>
        </div>
        <IoMenu />
      </section>

    </main>
  );
};

export default Nav;
