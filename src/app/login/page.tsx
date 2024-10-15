"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import CardLogin from "../components/CardLogin";

export default function Login() {
  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <>
      <div
        data-aos="zoom-in"
        className="flex justify-center items-center min-h-screen mx-[20px] lg:mx-0 md:mx-0 my-[46px] lg:my-0 md:my-0 "
      >
        <CardLogin />
      </div>
    </>
  );
}
