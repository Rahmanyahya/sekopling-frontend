"use client";
import { useState } from "react";
import React from "react";
import Image from "next/image";
import homeIcon from "/public/home_1.svg";
import calendarIcon from "/public/calendar.svg";
import taskIcon from "/public/file-text.svg";
import infoIcon from "/public/info_circle.svg";
import outIcon from "/public/Arrow_Left_circle.svg";
import arrowLeft from "/public/chevron-left.svg";
import arrowRight from "/public/chevron-right.svg";
import cirlcleIcon from "/public/circle.svg";
import profilePic from "/public/profile-pict.png";

export default function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
    setIsSidebarVisible(!isSidebarVisible);
  };

  return (
    <>
      <div
        className={`bg-white min-h-screen flex flex-col ${
          isCollapsed ? "w-[148px]" : "w-[320px]"
        } transition-all duration-200 relative ${
          isSidebarVisible ? "block" : "hidden"
        } md:block`}
      >
        <div
          className={`${
            isCollapsed ? "px-[42px]" : "p-[48px]"
          } flex-grow flex flex-col gap-y-[28px] text-[16px] font-medium`}
        >
          {/* Sidebar Top */}
          <div
            className={`flex items-center justify-between mb-[52px] ${
              isCollapsed ? "py-[48px]" : ""
            } `}
          >
            <div
              className={`w-full justify-center flex items-center ${
                isCollapsed ? "justify-center p-[16px]" : "px-[24px] py-[14px]"
              } bg-red300 rounded-[8px] text-white`}
            >
              <Image
                src={cirlcleIcon}
                alt="circle"
                className={`${isCollapsed ? "" : "mr-[8px]"}`}
              />
              <span
                className={`text-[24px] font-semibold ${
                  isCollapsed ? "hidden" : "block"
                }`}
              >
                Sekopling
              </span>
            </div>

            {/* Arrow Button */}
            <button
              className={`w-[56px] h-[56px] rounded-[8px] bg-white p-[16px] border-[2px] border-red100 shadow-[0_0_5px_0_rgba(255,0,0,0.5)] flex items-center justify-center absolute top-[48px] right-[-2px] transform translate-x-1/2`}
              onClick={toggleSidebar}
            >
              <Image src={isCollapsed ? arrowRight : arrowLeft} alt="arrow" />
            </button>
          </div>

          {/* Profile Picture & Name */}
          <div className="flex items-center gap-x-[12px] md:hidden">
            <div className="w-[44px] h-[44px] rounded-full border border-red100 shadow-[0_0_5px_0_rgba(255,0,0,0.5)]">
              <Image src={profilePic} alt="pp" className="rounded-full" />
            </div>
            <h6 className="text-[16px] font-semibold">Ambalen</h6>
          </div>

          <button
            className="bg-transparent duration-200 w-full flex md:mb-[24px] items-center md:hidden px-[16px] py-[14px] hover:bg-red500 rounded-[8px] text-primBlack hover:text-white group "
          >
            <Image
              src={outIcon}
              alt="logout"
              className={`${
                isCollapsed ? "" : "mr-[8px]"
              } group-hover:filter group-hover:invert group-hover:brightness-0 group-hover:contrast-200 duration-200`}
            />
            <span className={`${isCollapsed ? "hidden" : "block"}`}>
              Log out
            </span>
          </button>

          {/* Dashboard */}
          <button
            className={`w-full flex items-center ${
              isCollapsed ? "justify-center p-[16px]" : "px-[24px] py-[14px]"
            } bg-red500 rounded-[8px] text-white`}
          >
            <Image
              src={homeIcon}
              alt="home"
              className={`${isCollapsed ? "" : "mr-[8px]"}`}
            />
            <span className={`${isCollapsed ? "hidden" : "block"}`}>
              Dashboard
            </span>
          </button>

          {/* Jadwal Pelajaran */}
          <button
            className={`w-full flex items-center ${
              isCollapsed ? "justify-center p-[16px]" : "px-[24px] py-[14px]"
            } bg-transparent duration-200 hover:bg-red500 rounded-[8px] text-primBlack hover:text-white group`}
          >
            <Image
              src={calendarIcon}
              alt="calendar"
              className={`${
                isCollapsed ? "" : "mr-[8px]"
              } group-hover:filter group-hover:invert group-hover:brightness-0 group-hover:contrast-200 duration-200`}
            />
            <span className={`${isCollapsed ? "hidden" : "block"}`}>
              Jadwal Pelajaran
            </span>
          </button>

          {/* Pekerjaan Rumah */}
          <button
            className={`w-full flex items-center ${
              isCollapsed ? "justify-center p-[16px]" : "px-[24px] py-[14px]"
            } bg-transparent duration-200 hover:bg-red500 rounded-[8px] text-primBlack hover:text-white group`}
          >
            <Image
              src={taskIcon}
              alt="task"
              className={`${
                isCollapsed ? "" : "mr-[8px]"
              } group-hover:filter group-hover:invert group-hover:brightness-0 group-hover:contrast-200 duration-200`}
            />
            <span className={`${isCollapsed ? "hidden" : "block"}`}>
              Pekerjaan Rumah
            </span>
          </button>
        </div>


        {/* Sidebar Bottom (Butuh Bantuan & Log Out) */}
        <div
          className={`bottom-0 absolute text-[16px] font-medium ${
            isCollapsed ? "px-[42px] py-[48px]" : "p-[48px]"
            }`}
        >
            {/* <div className="w-full border md:hidden mx-[42px] border-gray200 my-[28px]"></div> */}
          <button
            className={`w-full flex md:mb-[24px] items-center ${
              isCollapsed ? "justify-center p-[16px]" : "px-[24px] py-[14px]"
            } bg-transparent duration-200 hover:bg-red500 rounded-[8px] text-primBlack hover:text-white group`}
          >
            <Image
              src={infoIcon}
              alt="info"
              className={`${
                isCollapsed ? "" : "mr-[8px]"
              } group-hover:filter group-hover:invert group-hover:brightness-0 group-hover:contrast-200 duration-200`}
            />
            <span className={`${isCollapsed ? "hidden" : "block"}`}>
              Butuh Bantuan?
            </span>
          </button>

          <button
            className={`w-full md:flex items-center hidden ${
              isCollapsed ? "justify-center p-[16px]" : "px-[24px] py-[14px]"
            } bg-transparent duration-200 hover:bg-red500 rounded-[8px] text-primBlack hover:text-white group`}
          >
            <Image
              src={outIcon}
              alt="logout"
              className={`${
                isCollapsed ? "" : "mr-[8px]"
              } group-hover:filter group-hover:invert group-hover:brightness-0 group-hover:contrast-200 duration-200`}
            />
            <span className={`${isCollapsed ? "hidden" : "block"}`}>
              Log out
            </span>
          </button>
        </div>
      </div>

      {/* Arrow Button for Mobile */}
      <button
        className={`w-[56px] h-[56px] rounded-[8px] bg-white p-[16px] border-[2px] border-red100 shadow-[0_0_5px_0_rgba(255,0,0,0.5)] flex items-center justify-center fixed top-[48px] left-[16px] ml-[20px] md:hidden ${
          isSidebarVisible ? "hidden" : "block"
        }`}
        onClick={toggleSidebar}
      >
        <Image src={isCollapsed ? arrowRight : arrowLeft} alt="arrow" />
      </button>
    </>
  );
}
