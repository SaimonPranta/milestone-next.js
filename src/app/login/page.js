"use client";

import Nav from "@/components/Header/Nav";
import { setCookie, getCookie } from "cookies-next";
// import Router from "next/router";

const Page = () => {
  const handleLogin = () => {
    setCookie("isUserLogIn", true);
    // Router.push("/");
  };

  return (
    <div>
      <Nav />
      <button onClick={handleLogin}>Click to Login </button>
    </div>
  );
};

export default Page;
