"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Calendar() {
  useEffect(() => {
    AOS.init({
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <>
      <div data-aos="fade-up" className="w-full h-full bg-white rounded-[8px] border border-red100 shadow-[0_0_5px_0_rgba(255,0,0,0.5)]">
        <div className="m-[10px] md:m-[12px] ">
          <div className="w-full h-[48px] bg-red400 rounded-[4px] items-center text-white flex justify-center">
            <h5 className="text-[16px] font-semibold ">
              Jadwal Pelajaran Hari Ini
            </h5>
          </div>
          <div className="flex justify-between gap-x-[12px] my-[8px] ">
            <div className="w-full h-[40px] md:h-[48px] rounded-[4px] text-white flex justify-center p-[10px] bg-red500 ">
              <h5 className="md:text-[16px] text-[14px] font-semibold">
                Senin
              </h5>
            </div>
            <div className="w-full h-[40px] md:h-[48px] rounded-[4px] text-white flex justify-center p-[10px] bg-red500 ">
              <h5 className="md:text-[16px] text-[12px] font-semibold">
                16 September 2024
              </h5>
            </div>
          </div>
          <div className="flex gap-x-[12px]">
            <div className=" w-full max-w-[56px] h-[48px] rounded-[4px] flex  justify-center items-center border border-red300 p-[12px]">
              <h5 className=" font-semibold  md:text-[16px] text-[14px]  text-red300 ">
                No
              </h5>
            </div>
            <div className="w-full h-[48px] rounded-[4px] flex  justify-center items-center border border-red300 p-[12px] ">
              <h5 className=" font-semibold  md:text-[16px] text-[14px]  text-red300 ">
                Kegiatan
              </h5>
            </div>
            <div className="w-full h-[48px] rounded-[4px] flex  justify-center items-center border border-red300 p-[12px] ">
              <h5 className=" font-semibold  md:text-[16px] text-[14px]  text-red300 ">
                Jam
              </h5>
            </div>
            <div className="w-full h-[48px] rounded-[4px] flex  justify-center items-center border border-red300 p-[12px] ">
              <h5 className=" font-semibold  md:text-[16px] text-[14px]  text-red300 ">
                Pengajar
              </h5>
            </div>
          </div>
        </div>
        {/* Schedule Content */}
        <div className="border flex gap-x-[12px] border-b border-t border-l-0 border-r-0 border-red100 w-full px-[12px] py-[8px] ">
          <div className="w-full max-w-[56px] flex justify-center items-center p-[12px] ">
            <p className="text-gray300 text-center text-[12px] md:text-[16px]">-</p>
          </div>
          <div className="w-full flex justify-center items-center p-[12px] ">
            <p className="text-gray300 text-center text-[12px] md:text-[16px]">Upacara</p>
          </div>
          <div className="w-full flex justify-center items-center p-[12px] ">
            <p className="text-gray300 text-center text-[12px] md:text-[16px]">06.30 - 07.15</p>
          </div>
          <div className="w-full flex justify-center items-center p-[12px] ">
            <p className="text-gray300 text-center text-[12px] md:text-[16px]">-</p>
          </div>
        </div>
        <div className="border flex gap-x-[12px] border-b border-t-0 border-l-0 border-r-0 border-red100 w-full px-[12px] py-[8px] ">
          <div className="w-full max-w-[56px] flex justify-center items-center p-[12px] ">
            <p className="text-gray300 text-center text-[12px] md:text-[16px]">-</p>
          </div>
          <div className="w-full flex justify-center items-center p-[12px] ">
            <p className="text-gray300 text-center text-[12px] md:text-[16px]">Doa / Dhuha</p>
          </div>
          <div className="w-full flex justify-center items-center p-[12px] ">
            <p className="text-gray300 text-center text-[12px] md:text-[16px]">07.15 - 07.45</p>
          </div>
          <div className="w-full flex justify-center items-center p-[12px] ">
            <p className="text-gray300 text-center text-[12px] md:text-[16px]">-</p>
          </div>
        </div>
        <div className="border flex gap-x-[12px] border-b border-t-0 border-l-0 border-r-0 border-red100 w-full px-[12px] py-[8px] ">
          <div className="w-full max-w-[56px] flex justify-center items-center p-[12px] ">
            <p className="text-gray300 text-center text-[12px] md:text-[16px]">1</p>
          </div>
          <div className="w-full flex justify-center items-center p-[12px] ">
            <p className="text-gray300 text-center text-[12px] md:text-[16px]">Tahfidz</p>
          </div>
          <div className="w-full flex justify-center items-center p-[12px] ">
            <p className="text-gray300 text-center text-[12px] md:text-[16px]">07.45 - 08.30</p>
          </div>
          <div className="w-full flex justify-center items-center p-[12px] ">
            <p className="text-gray300 text-center text-[12px] md:text-[16px]"> Nico Rachmacandrana, S.ST.</p>
          </div>
        </div>
      </div>
    </>
  );
}
