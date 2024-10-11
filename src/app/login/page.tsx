import React from "react";
import CardLogin from "../components/CardLogin";

export default function Login() {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <CardLogin />
      </div>
    </>
  );
}
