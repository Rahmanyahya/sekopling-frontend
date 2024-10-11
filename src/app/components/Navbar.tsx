import React from "react";
import Image from "next/image";
import profilePic from "/public/profilValen.png";

export default function Navbar() {
  return (
    <>
      <nav className="mx-[40px] py-[25px]">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="font-bold text-[28px]">Sekopling</h1>
          </div>
          <div className="relative flex items-center justify-between gap-x-[15px]">
            {/* search bar */}
            <input
              type="text"
              placeholder="Search"
              className=" bg-secWhite border-gray-300 w-[600px] px-[20px] py-[15px] rounded-full pl-[45px] focus:outline-none focus:ring-1 focus:ring-darkGray"
            />
            <svg
              className="w-6 h-6 text-darkGray absolute left-3 top-1/2 transform -translate-y-1/2"
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
                stroke-width="2"
                d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
              />
            </svg>
            {/* notitication */}
            <div className="group">
              <div className="p-[15px] bg-secWhite group-hover:bg-black rounded-full duration-200">
                <svg
                  className="w-6 h-6 text-darkGray group-hover:text-white duration-200"
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
                    d="M12 5.365V3m0 2.365a5.338 5.338 0 0 1 5.133 5.368v1.8c0 2.386 1.867 2.982 1.867 4.175 0 .593 0 1.292-.538 1.292H5.538C5 18 5 17.301 5 16.708c0-1.193 1.867-1.789 1.867-4.175v-1.8A5.338 5.338 0 0 1 12 5.365ZM8.733 18c.094.852.306 1.54.944 2.112a3.48 3.48 0 0 0 4.646 0c.638-.572 1.236-1.26 1.33-2.112h-6.92Z"
                  />
                </svg>
              </div>
            </div>
            {/* settings */}
            <div className="group">
              <div className="p-[15px] bg-secWhite group-hover:bg-black rounded-full duration-200">
                <svg
                  className="w-6 h-6 text-darkGray group-hover:text-white duration-200"
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
                    d="M21 13v-2a1 1 0 0 0-1-1h-.757l-.707-1.707.535-.536a1 1 0 0 0 0-1.414l-1.414-1.414a1 1 0 0 0-1.414 0l-.536.535L14 4.757V4a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v.757l-1.707.707-.536-.535a1 1 0 0 0-1.414 0L4.929 6.343a1 1 0 0 0 0 1.414l.536.536L4.757 10H4a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h.757l.707 1.707-.535.536a1 1 0 0 0 0 1.414l1.414 1.414a1 1 0 0 0 1.414 0l.536-.535 1.707.707V20a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-.757l1.707-.708.536.536a1 1 0 0 0 1.414 0l1.414-1.414a1 1 0 0 0 0-1.414l-.535-.536.707-1.707H20a1 1 0 0 0 1-1Z"
                  />
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                  />
                </svg>
              </div>
            </div>
          </div>
          {/* profile */}
          <div className="flex gap-x-[15px]">
            <div>
              <Image
                src={profilePic}
                alt="profile-pic"
                width={50}
                height={50}
                className="rounded-full"
              />
            </div>
            <div className="text-black text-[14px] font-semibold">
              <h5>Vaaleant</h5>
              <p className="text-darkGray">Ketua Kelas</p>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
