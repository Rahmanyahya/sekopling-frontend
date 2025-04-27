"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function TaskBoard() {
  useEffect(() => {
    AOS.init({
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <>
      <div
        data-aos="fade-up"
        className="w-full h-full bg-white md:mt-0 mt-[28px] justify-center rounded-[8px] border border-red100 shadow-[0_0_5px_0_rgba(255,0,0,0.5)] px-[12px] py-[10px]"
      >
        <div className="w-full h-[48px] bg-red400 rounded-[4px] items-center text-white flex justify-center ">
          <h5 className="text-[16px] font-semibold ">Daftar Pekerjaan Rumah</h5>
        </div>
        {/* Task List */}
        <div className="my-[8px]">
          <div className="flex gap-x-[18px] items-center">
            <div className="w-[48px] h-[48px] text-white flex items-center justify-center bg-red500 rounded-[4px]">
              <p>01</p>
            </div>
            <p className="text-gray600 text-[14px]">
              Career Plan - Bimbingan Konseling
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
