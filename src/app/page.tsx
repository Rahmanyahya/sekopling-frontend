import React from "react";
import Image from "next/image";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Calendar from "./components/Calendar";
import CashBill from "./components/CashBill";
import TaskBoard from "./components/TaskBoard";

export default function Home() {
  return (
    <>
      <main>
        <Navbar />
        <Sidebar />
        <div></div>
      </main>
    </>
  );
}
