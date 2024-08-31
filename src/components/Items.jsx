import React, { useEffect, useState } from "react";
import dashimg from "../assets/Category.png";
import schedule from "../assets/Document.png";
import setting from "../assets/Setting.png";
import invoice from "../assets/Ticket.png";
import notification from "../assets/Notification.png";
import calendar from "../assets/Calendar (1).png";
import upload from "../assets/Chart.png";
import { DarkModeSwitch } from "react-toggle-dark-mode";

const Items = () => {

  const logout = () => {
    localStorage.clear();
    window.location.href = "/";
  };

  const [darkMode, setDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  }

  // Update the `dark` class on the body element whenever darkMode changes
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="cursor-pointer flex md:gap-6 lg:pr-12 gap-2 lg:gap-10 flex-col md:mt-6 items-start">
      <div className="flex justify-between items-center gap-3">
        <img alt="dashboard" src={dashimg} className="w-[24px] h-[24px]" />
        <p className="font-normal md:font text-[16px] md:text-[18px] text-[#030229]">
          Dashboard
        </p>
      </div>
      <div className="flex justify-between items-center gap-3">
        <img
          alt="dashboard"
          src={upload}
          className="w-[20px] h-[22px] "

        />
        <p className="font-normal text-[16px] md:text-[18px] text-[#605BFF]">Upload</p>
      </div>
      <div className="flex justify-between items-center gap-3">
        <img alt="dashboard" src={invoice} className="w-[24px] h-[18.37px]" />
        <p className="font-normal text-[16px] md:text-[18px] text-[#030229]">Invoice</p>
      </div>
      <div className="flex justify-between items-center gap-3">
        <img alt="dashboard" src={schedule} className="w-[24px] h-[26px]" />
        <p className="font-normal text-[16px] md:text-[18px] text-[#030229]">Schedule</p>
      </div>
      <div className="flex justify-between items-center gap-3">
        <img alt="dashboard" src={calendar} className="w-[24px] h-[26px] " />
        <p className="font-normal text-[16px] md:text-[18px] text-[#030229]">Calendar</p>
      </div>
      <div className="flex justify-between items-center gap-3">
        <img alt="dashboard" src={notification} className="w-[24px] h-[26px]" />
        <p className="font-normal text-[16px] md:text-[18px] text-[#030229]">Notification</p>
      </div>
      <div className="flex justify-between items-center gap-3">
        <img alt="dashboard" src={setting} className="w-[24px] h-[26px]" />
        <p className="font-normal text-[16px] md:text-[18px] text-[#030229]">Settings</p>
      </div>

      <div className="flex justify-between items-center gap-3" onClick={logout}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-6 h-6 -ml-1"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
          />
        </svg>
        <p className="font-normal text-[16px] md:text-[18px] hover:font-semibold">
          Logout
        </p>
      </div>

      <div>
        <DarkModeSwitch
          style={{ marginBottom: '2rem' }}
          checked={darkMode}
          onChange={toggleDarkMode}
          size={30}
        /> 
      </div>
    </div>
  );
};

export default Items;
