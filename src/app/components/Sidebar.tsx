import React from "react";

export default function Sidebar() {
  return (
    <>
      <div className="ml-[40px] mr-[50px] mt-[50px] max-w-[350px]">
        <div className="max-w-[250px] mb-[40px]">
          <h3 className="font-bold text-[28px]">
            Welcome to The Sekopling Class!
          </h3>
        </div>
        {/* buttons */}
        <div className="flex flex-col space-y-[25px] max-w-[290px]">
          <button className="bg-primBlack text-white text-[16px] py-[11px] px-[20px] rounded-full flex items-center justify-center">
            <svg
              className="w-6 h-6 mr-[10px] text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M11.293 3.293a1 1 0 0 1 1.414 0l6 6 2 2a1 1 0 0 1-1.414 1.414L19 12.414V19a2 2 0 0 1-2 2h-3a1 1 0 0 1-1-1v-3h-2v3a1 1 0 0 1-1 1H7a2 2 0 0 1-2-2v-6.586l-.293.293a1 1 0 0 1-1.414-1.414l2-2 6-6Z"
                clipRule="evenodd"
              />
            </svg>
            Dashboard
          </button>
          <button className="bg-transparent group hover:bg-primBlack duration-200 text-darkGray hover:text-white text-[16px] py-[11px] px-[20px] rounded-full flex items-center justify-center">
            <svg
              className="w-6 h-6 mr-[10px] text-darkGray duration-200 group-hover:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 10h16m-8-3V4M7 7V4m10 3V4M5 20h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Zm3-7h.01v.01H8V13Zm4 0h.01v.01H12V13Zm4 0h.01v.01H16V13Zm-8 4h.01v.01H8V17Zm4 0h.01v.01H12V17Zm4 0h.01v.01H16V17Z"
              />
            </svg>
            Calendar
          </button>
          <button className="bg-transparent group hover:bg-primBlack duration-200 text-darkGray hover:text-white text-[16px] py-[11px] px-[20px] rounded-full flex items-center justify-center">
            <svg
              className="w-6 h-6 mr-[10px] text-darkGray duration-200 group-hover:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 4h3a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h3m0 3h6m-6 5h6m-6 4h6M10 3v4h4V3h-4Z"
              />
            </svg>
            My Task
          </button>
        </div>
        <div className="flex flex-col space-y-[25px] max-w-[290px] mt-[280px]">
          <button className="group bg-primPurple hover:bg-darkPurple duration-200 text-white text-[16px] py-[11px] px-[20px] rounded-full flex items-center justify-center">
            <svg
              className="w-6 h-6 mr-[10px] duration-200 text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 12H3m0 0 4-4m-4 4 4 4m6-10h4a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-4"
              />
            </svg>
            Logout
          </button>
        </div>
      </div>
    </>
  );
}
