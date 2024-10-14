import React from "react";
import Image from "next/image";
import Wallet from "/public/Pay.svg";
import Percent from "/public/Percent_circle.svg";

export default function CashBill() {
  return (
    <>
      <div className="grid gap-y-[20px]">
        {/* Total Tagihan */}
        <div className="w-full h-[90px] flex items-center rounded-[8px] border border-red100 shadow-[0_0_5px_0_rgba(255,0,0,0.5)] px-[20px] py-[12px] ">
          <div className="w-[50px] h-[50px] flex items-center rounded-[4px] bg-red400 p-[12px] ">
            <Image src={Wallet} alt="wallet" />
          </div>
          <div className="text-primBlack ml-[20px]">
            <h5 className="text-[16px] font-semibold mb-[2px]">
              Total Tagihan Kas
            </h5>
            <p className="text-gray700 text-[18px]">Rp. 10.000,00</p>
          </div>
        </div>
        {/* Tagihan Lain */}
        <div className="w-full h-[90px] flex items-center rounded-[8px] border border-red100 shadow-[0_0_5px_0_rgba(255,0,0,0.5)] px-[20px] py-[12px] ">
          <div className="w-[50px] h-[50px] flex items-center rounded-[4px] bg-red400 p-[12px] ">
            <Image src={Percent} alt="percent" />
          </div>
          <div className="text-primBlack ml-[20px]">
            <h5 className="text-[16px] font-semibold mb-[2px]">
              Total Tagihan Lainnya
            </h5>
            <p className="text-gray700 text-[18px]">Rp. 0</p>
          </div>
        </div>
      </div>
    </>
  );
}
