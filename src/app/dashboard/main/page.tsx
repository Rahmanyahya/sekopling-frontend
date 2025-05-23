import Announcement from "@/app/components/Announcement";
import Calendar from "@/app/components/Calendar";
import CashBill from "@/app/components/CashBill";
import TaskBoard from "@/app/components/TaskBoard";
import Image from "next/image";
import React from "react";
import profilePic from "../../../../public/profile-pict.png";

const DashboardPage = () => {
  return (
    <>
      <div className="mt-[66px] w-full lg:px-[48px] px-[20px] pb-[28px] md:pb-[46px] flex items-center justify-between">
        <h4 className="text-[20px] lg:text-[24px] font-semibold">
          Selamat Datang di Dashboard,{" "}
          <span className="text-red300">Ambalen!</span>
        </h4>
        <div className="w-[44px] h-[44px] hidden md:block rounded-full border border-red100 shadow-[0_0_5px_0_rgba(255,0,0,0.5)]">
          <Image src={profilePic} alt="pp" className="rounded-full" />
        </div>
      </div>
      <div className="md:m-[48px] mx-[20px] mt-[28px] mb-[28px] md:mb-[48px] grid grid-cols-1 md:grid-cols-2 gap-x-[48px]">
        <div>
          <Announcement />
          <CashBill />
        </div>
        <TaskBoard />
      </div>
      <div className="md:m-[48px] mx-[20px] md:pt-0 pt-[28px] mb-[28px] md:mb-[48px]">
        <Calendar />
      </div>
    </>
  );
};

export default DashboardPage;
