import React from "react";
import Image from "next/image";
import Sidebar from "./components/Sidebar";
import Announcement from "./components/Announcement";
import Calendar from "./components/Calendar";
import CashBill from "./components/CashBill";
import TaskBoard from "./components/TaskBoard";
import profilePic from "/public/profile-pict.png";

export default function Home() {
  return (
    <>
      <main className="bg-whiteDash flex">
        <Sidebar />

        <div className="md:relative w-full">
          <div className="mt-[66px] w-full px-[48px] pb-[46px] flex items-center justify-between">
            <h4 className="text-[24px] font-semibold">
              Selamat Datang di Dashboard,{" "}
              <span className="text-red300">Ambalen!</span>
            </h4>
            <div className="w-[44px] h-[44px] rounded-full border border-red100 shadow-[0_0_5px_0_rgba(255,0,0,0.5)]">
              <Image src={profilePic} alt="pp" className="rounded-full" />
            </div>
          </div>
          <div className="m-[48px] grid grid-cols-2 gap-x-[48px]">
            <div>
              <Announcement />
              <CashBill />
            </div>
            <TaskBoard />
          </div>
        </div>
      </main>
    </>
  );
}
