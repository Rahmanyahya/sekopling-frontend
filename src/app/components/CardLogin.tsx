import React from "react";

export default function CardLogin() {
  return (
    <>
      <div className="w-[440px] lg:w-[618px] h-[848px] lg:h-[816] border border-red100 rounded-[12px] shadow-[0_0_5px_0_rgba(255,0,0,0.5)]">
        <div className="py-[48px] px-[18px] lg:px-[36px] ">
          {/* head login */}
          <div className="mb-[92px]">
            <div className="flex justify-center">
              <div className="w-[88px] h-[88px] bg-red300 rounded-[12px] ">
                <div className="p-[28px] flex items-center">
                  <svg
                    className="w-[32px] h-[32px] text-white"
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
            </div>
            <h3 className="text-center font-bold mt-[28px] text-[28px] text-primBlack ">
              Selamat Datang di Sekopling Web!!
            </h3>
          </div>
          {/* form */}
          <form>
            <div className="mb-[24px]">
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
                className="w-full h-[48px] border border-gray600 rounded-[8px] px-[12px] mt-[8px]"
              />
            </div>
            <div className="mb-[24px]">
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
                className="w-full h-[48px] mb-[8px] border border-gray600 rounded-[8px] px-[12px] mt-[8px]"
              />
              <div className="mb-[92px]">
                <a href="" className=" text-red300 hover:underline">
                  Lupa Password?
                </a>
              </div>
            </div>
            <div className="mb-[24px]">
              <button
                type="submit"
                className="w-full h-[48px] bg-red300 hover:bg-red400 duration-200 text-white rounded-[8px] font-medium text-[16px] "
              >
                Login
              </button>
            </div>
            <div className="flex items-center justify-center my-[24px]">
              <div className="h-[1px] bg-black w-full"></div>
              <span className="mx-[12px] text-primBlack">atau</span>
              <div className="h-[1px] bg-black w-full"></div>
            </div>
            <div className="mb-[24px]">
              <button
                type="button"
                className="w-full h-[48px] border border-gray600 hover:bg-black hover:text-white duration-200 text-primBlack rounded-[8px] font-medium text-[16px] flex items-center justify-center"
              >
                <svg
                  className="w-[24px] h-[24px] mr-[8px]"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 48 48"
                >
                  <path
                    fill="#EA4335"
                    d="M24 9.5c3.15 0 5.9 1.15 8.1 3.05l6-6C34.95 3.5 29.85 1.5 24 1.5 14.8 1.5 7.15 7.55 4.4 15.85l7.35 5.7C13.35 15.1 18.15 9.5 24 9.5z"
                  />
                  <path
                    fill="#4285F4"
                    d="M46.5 24c0-1.65-.15-3.3-.45-4.85H24v9.3h12.75c-.6 3-2.4 5.55-4.95 7.2l7.35 5.7C43.2 37.45 46.5 31.15 46.5 24z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M11.75 28.55c-.75-2.25-1.15-4.65-1.15-7.05s.4-4.8 1.15-7.05l-7.35-5.7C2.15 12.2 1.5 17 1.5 24s.65 11.8 2.4 16.25l7.35-5.7z"
                  />
                  <path
                    fill="#34A853"
                    d="M24 46.5c5.85 0 10.95-1.95 14.85-5.55l-7.35-5.7c-2.1 1.4-4.75 2.25-7.5 2.25-5.85 0-10.65-3.6-12.45-8.7l-7.35 5.7C7.15 40.45 14.8 46.5 24 46.5z"
                  />
                </svg>
                Login with Google
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
