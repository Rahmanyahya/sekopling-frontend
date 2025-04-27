"use client";

import Sidebar from "@/app/components/Sidebar";
import React, { PropsWithChildren } from "react";

export default function DashboardLayout({ children }: PropsWithChildren) {
  return (
    <div className="bg-whiteDash flex h-screen w-full">
      <Sidebar />
      <div className=" w-full transition-all duration-200 overflow-auto">
        {children}
      </div>
    </div>
  );
}
