"use client";
import { useState } from "react";
import React from "react";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import homeIcon from "/public/home_1.svg";
import calendarIcon from "/public/calendar.svg";
import taskIcon from "/public/file-text.svg";
import infoIcon from "/public/info_circle.svg";
import outIcon from "/public/Arrow_Left_circle.svg";
import arrowLeft from "/public/chevron-left.svg";
import arrowRight from "/public/chevron-right.svg";
import cirlcleIcon from "/public/circle.svg";
import profilePic from "/public/profile-pict.png";

// Definisi menu untuk sidebar dengan path
const menuItems = [
  {
    id: "dashboard",
    name: "Dashboard",
    icon: homeIcon,
    path: "/dashboard/main",
  },
  {
    id: "schedule",
    name: "Jadwal Pelajaran",
    icon: calendarIcon,
    path: "/dashboard/schedule",
  },
  {
    id: "homework",
    name: "Pekerjaan Rumah",
    icon: taskIcon,
    path: "/dashboard/homework",
  },
];

export default function Sidebar() {
  const router = useRouter();
  const pathname = usePathname();

  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  // Set active menu berdasarkan path yang aktif
  const getActiveMenu = () => {
    if (pathname.includes("/dashboard/main")) return "dashboard";
    if (pathname.includes("/dashboard/schedule")) return "schedule";
    if (pathname.includes("/dashboard/homework")) return "homework";
    return "dashboard"; // Default
  };

  const [activeMenu, setActiveMenu] = useState(getActiveMenu);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
    setIsSidebarVisible(!isSidebarVisible);
  };

  const handleMenuClick = (menuId: string, path: string) => {
    setActiveMenu(menuId);
    router.push(path); // Navigasi ke path yang sesuai
  };

  return (
    <>
      <div
        className={`bg-white min-h-screen flex flex-col ${
          isCollapsed
            ? "w-[80px] sm:w-[120px]"
            : "w-[220px] sm:w-[260px] md:w-[300px]"
        } transition-all duration-200 fixed md:relative z-30 ${
          isSidebarVisible ? "block" : "hidden"
        } md:block`}
      >
        <div
          className={`${
            isCollapsed
              ? "px-[12px] sm:px-[20px]"
              : "px-[16px] py-[24px] sm:px-[24px] sm:py-[32px] md:px-[32px] md:py-[40px]"
          } flex-grow flex flex-col gap-y-[20px] sm:gap-y-[24px] text-[14px] sm:text-[16px] font-medium`}
        >
          {/* Sidebar Top */}
          <div
            className={`flex items-center justify-between mb-[32px] sm:mb-[40px] ${
              isCollapsed ? "py-[24px] sm:py-[32px]" : ""
            } `}
          >
            <div
              className={`w-full justify-center flex items-center ${
                isCollapsed ? "justify-center p-[12px]" : "px-[12px] py-[12px]"
              } bg-red300 rounded-[8px] text-white`}
            >
              <Image
                src={cirlcleIcon}
                alt="circle"
                className={`${
                  isCollapsed ? "" : "mr-[8px]"
                } w-[16px] h-[16px] sm:w-auto sm:h-auto`}
              />
              <span
                className={`text-[18px] sm:text-[20px] md:text-[24px] font-semibold ${
                  isCollapsed ? "hidden" : "block"
                }`}
              >
                Sekopling
              </span>
            </div>

            {/* Arrow Button */}
            <button
              className={`w-[40px] h-[40px] sm:w-[48px] sm:h-[48px] rounded-[8px] bg-white p-[12px] border-[2px] border-red100 shadow-[0_0_5px_0_rgba(255,0,0,0.5)] flex items-center justify-center absolute top-[24px] sm:top-[32px] md:top-[40px] right-[-2px] transform translate-x-1/2`}
              onClick={toggleSidebar}
            >
              <Image
                src={isCollapsed ? arrowRight : arrowLeft}
                alt="arrow"
                className="w-[16px] h-[16px] sm:w-auto sm:h-auto"
              />
            </button>
          </div>

          {/* Profile Picture & Name */}
          <div className="flex items-center gap-x-[12px] md:hidden">
            <div className="w-[36px] h-[36px] sm:w-[40px] sm:h-[40px] rounded-full border border-red100 shadow-[0_0_5px_0_rgba(255,0,0,0.5)]">
              <Image src={profilePic} alt="pp" className="rounded-full" />
            </div>
            <h6 className="text-[14px] sm:text-[16px] font-semibold">
              Ambalen
            </h6>
          </div>

          <button className="bg-transparent duration-200 w-full flex md:mb-[24px] items-center md:hidden px-[10px] py-[10px] sm:px-[12px] sm:py-[12px] hover:bg-red500 rounded-[8px] text-primBlack hover:text-white group ">
            <Image
              src={outIcon}
              alt="logout"
              className={`${
                isCollapsed ? "" : "mr-[8px]"
              } group-hover:filter group-hover:invert group-hover:brightness-0 group-hover:contrast-200 duration-200 w-[16px] h-[16px] sm:w-auto sm:h-auto`}
            />
            <span
              className={`text-xs sm:text-sm ${
                isCollapsed ? "hidden" : "block"
              }`}
            >
              Log out
            </span>
          </button>

          {/* Menu Items from Array */}
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleMenuClick(item.id, item.path)}
              className={`w-full flex items-center ${
                isCollapsed ? "justify-center p-[10px]" : "px-[12px] py-[12px]"
              } ${
                activeMenu === item.id
                  ? "bg-red500 text-white"
                  : "bg-transparent text-primBlack hover:bg-red500 hover:text-white"
              } duration-200 rounded-[8px] group`}
            >
              <Image
                src={item.icon}
                alt={item.name.toLowerCase()}
                className={`${
                  isCollapsed ? "" : "mr-[8px]"
                } w-[16px] h-[16px] sm:w-auto sm:h-auto
                  ${activeMenu === item.id ? "brightness-0 invert" : ""} 
                  group-hover:brightness-0 group-hover:invert transition-all duration-200`}
              />
              <span
                className={`text-xs sm:text-sm ${
                  isCollapsed ? "hidden" : "block"
                }`}
              >
                {item.name}
              </span>
            </button>
          ))}
        </div>

        {/* Sidebar Bottom (Butuh Bantuan & Log Out) */}
        <div
          className={`bottom-0 absolute text-[14px] sm:text-[16px] font-medium ${
            isCollapsed
              ? "px-[12px] py-[24px] sm:px-[20px] sm:py-[32px]"
              : "px-[16px] py-[24px] sm:px-[24px] sm:py-[32px] md:px-[32px] md:py-[40px]"
          }`}
        >
          <button
            className={`w-full flex md:mb-[20px] items-center ${
              isCollapsed ? "justify-center p-[10px]" : "px-[12px] py-[12px]"
            } bg-transparent duration-200 hover:bg-red500 rounded-[8px] text-primBlack hover:text-white group`}
          >
            <Image
              src={infoIcon}
              alt="info"
              className={`${
                isCollapsed ? "" : "mr-[8px]"
              } group-hover:filter group-hover:invert group-hover:brightness-0 group-hover:contrast-200 duration-200 w-[16px] h-[16px] sm:w-auto sm:h-auto`}
            />
            <span
              className={`text-xs sm:text-sm ${
                isCollapsed ? "hidden" : "block"
              }`}
            >
              Butuh Bantuan?
            </span>
          </button>

          <button
            className={`w-full md:flex items-center hidden ${
              isCollapsed ? "justify-center p-[10px]" : "px-[12px] py-[12px]"
            } bg-transparent duration-200 hover:bg-red500 rounded-[8px] text-primBlack hover:text-white group`}
          >
            <Image
              src={outIcon}
              alt="logout"
              className={`${
                isCollapsed ? "" : "mr-[8px]"
              } group-hover:filter group-hover:invert group-hover:brightness-0 group-hover:contrast-200 duration-200 w-[16px] h-[16px] sm:w-auto sm:h-auto`}
            />
            <span
              className={`text-xs sm:text-sm ${
                isCollapsed ? "hidden" : "block"
              }`}
            >
              Log out
            </span>
          </button>
        </div>
      </div>

      {/* Arrow Button for Mobile */}
      <button
        className={`w-[40px] h-[40px] sm:w-[48px] sm:h-[48px] rounded-[8px] bg-white p-[12px] border-[2px] border-red100 shadow-[0_0_5px_0_rgba(255,0,0,0.5)] flex items-center justify-center fixed top-[24px] sm:top-[32px] left-[16px] z-40 md:hidden ${
          isSidebarVisible ? "hidden" : "block"
        }`}
        onClick={toggleSidebar}
      >
        <Image
          src={isCollapsed ? arrowRight : arrowLeft}
          alt="arrow"
          className="w-[16px] h-[16px] sm:w-auto sm:h-auto"
        />
      </button>
    </>
  );
}
