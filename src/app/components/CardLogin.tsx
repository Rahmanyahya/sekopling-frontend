import React from "react";

export default function CardLogin() {
  return (
    <>
      <div className="w-[320px] lg:w-[480px] h-full border border-red100 rounded-[12px] shadow-[0_0_5px_0_rgba(255,0,0,0.5)]">
        <div className="py-[36px] px-[16px] md:px-[24px] ">
          {/* head login */}
          <div className="mb-[64px]">
            <div className="flex item justify-center">
              <div className="w-[64px] h-[64px] bg-red300 rounded-[8px] flex justify-center items-center">
                <svg
                  className="w-[24px] h-[24px] text-white"
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
                    d="M16 12H4m12 0-4 4m4-4-4-4m3-4h2a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3h-2"
                  />
                </svg>
              </div>
            </div>
            <h3 className="text-center font-bold mt-[20px] text-[24px] text-primBlack ">
              Selamat Datang di Sekopling Web!!
            </h3>
          </div>
          {/* form */}
          <form>
            <div className="mb-[20px]">
              <label
                htmlFor="email"
                className="block text-[14px] text-primBlack"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="brezizi.id@gmail.com"
                className="w-full h-[40px] border border-gray600 invalid:text-red300 rounded-[8px] px-[12px] mt-[8px]"
              />
            </div>
            <div className="mb-[20px]">
              <label
                htmlFor="password"
                className="block text-[14px] text-primBlack"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="********"
                className="w-full h-[40px] mb-[8px] border border-gray600 rounded-[8px] px-[12px] mt-[8px]"
              />
              <div>
                <a href="" className=" text-red300 text-[14px] hover:underline">
                  Lupa Password?
                </a>
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="w-full h-[40px] bg-red300 hover:bg-red400 duration-200 text-white rounded-[8px] font-medium text-[16px] "
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
