import React, { useState } from "react";
import logo from "../assets/Logo and company.png";
import { HiMenuAlt3 } from "react-icons/hi";
import Items from "./Items";

const SideBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`bg-[#ffffff] md:h-[150vh] relative flex flex-col justify-between py-4 md:py-0 text-gray-100 px-6 ml-5  dark:text-white dark:bg-slate-900`}
    >
      <div className="flex flex-col gap-4">
        <div className="flex flex-row">
          <div>
            <img alt="dashboard" src={logo} className="w-[111px] h-[42px] mt-[49px] ml-[20px]" />
          </div>
          <div>
            <HiMenuAlt3
              size={30}
              className=" cursor-pointer absolute right-0 my-auto mr-5 mt-1 text-black"
              onClick={() => setOpen(!open)}
            />
          </div>
          {open && (
            <div className="mt-12 mx-auto right-0 absolute bg-[#4285F4] p-4 rounded-lg mr-1 dark:text-white">
              <Items />
            </div>
          )}
        </div>

      </div>


    </div>
  );
};

export default SideBar;
