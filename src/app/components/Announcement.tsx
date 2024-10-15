"use client";
import React, {useEffect} from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import Alert from "/public/alert_circle.svg";

export default function Announcement() {
  useEffect(() => {
    AOS.init({
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <>
      <div data-aos="fade-up" className="md:mb-[54px] mb-[28px]">
        <div className="w-full h-[90px] bg-white flex gap-x-[28px] items-center rounded-[8px] border border-red100 shadow-[0_0_5px_0_rgba(255,0,0,0.5)] px-[24px] py-[16px] ">
          <div className="w-[50px] h-[50px] flex items-center rounded-[4px] bg-red300 p-[16px] ">
            <Image src={Alert} alt="alert"/>
          </div>
          <div className="text-primBlack">
            <h5 className="text-[16px] font-semibold mb-[4px]">
              Pengumuman Singkat
            </h5>
            <p className="text-gray600 text-[14px]">
              Hari ini ada upacara bendera di Lapangan Manatahan.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
