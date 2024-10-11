import React from "react";

export default function CardLogin() {
  return (
    <div className="flex items-center justify-center">
      <div className="w-[521px] px-[13px] shadow-md py-[45px] rounded-[50px] bg-gradient-to-b from-cyan-200 via-white to-white flex flex-col items-center">
        <div className="w-[70px] h-[70px] mb-[25px] shadow-md rounded-[20px] bg-white flex items-center justify-center">
          <svg
            className="w-6 h-6 duration-200 text-darkGray"
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
        </div>
        <div className="mb-[30px] text-center">
          <h1 className="text-[30px] mb-[10px] font-bold">Login With Email</h1>
          <p className="text-darkGray mx-[100px] text-[18px]">
            Jangan lupa login yaa guys, agar bisa mengakses.
          </p>
        </div>
        <div className="w-full flex flex-col items-center">
          {/* input email */}
          <div className="grid grid-cols-1">
            <input
              type="email"
              placeholder="Email"
              className="mb-4 w-[455px] px-[20px] py-[15px] invalid:text-red-500 border-gray-300 rounded-full outline-none bg-secWhite"
            />
            <input
              type="password"
              placeholder="Password"
              className="mb-10 w-[455px] px-[20px] py-[15px] border-gray-300 rounded-full outline-none bg-secWhite"
            />
          </div>
          <button className="px-10 py-3 bg-primBlack text-white rounded-full">
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
