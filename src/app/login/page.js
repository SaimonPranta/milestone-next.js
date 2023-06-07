"use client"

import Nav from '@/components/Header/Nav';
import { setCookie, getCookie } from "cookies-next";

const Page = () => {
    const handleLogin = ()=> {
      // localStorage.setItem("isUserLogIn", true)
      setCookie("isUserLogIn", true);
      console.log(getCookie("isUserLogIn"));
    }
    
    return (
      <div>
        <Nav />
        <button onClick={handleLogin}>Click to Login </button>
      </div>
    );
};

export default Page;