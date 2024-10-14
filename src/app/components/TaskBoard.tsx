import React from "react";

export default function TaskBoard() {
  return (
    <>
      <div className="w-full h-[112px] grid grid-cols-1 justify-center rounded-[8px] border border-red100 shadow-[0_0_5px_0_rgba(255,0,0,0.5)] px-[12px] py-[10px]">
        <div className="w-full h-[48px] mb-[8px] bg-red400 rounded-[4px] items-center text-white flex justify-center ">
          <h5 className="text-[16px] font-semibold ">Daftar Pekerjaan Rumah</h5>
        </div>
        {/* Task List */}
        <div className="flex gap-x-[18px]">
          
        </div>
      </div> 
    </>
  );
}
