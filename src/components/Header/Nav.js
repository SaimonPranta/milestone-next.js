"use client";
import Link from "next/link";
import styles from "./nav.module.css";
import { deleteCookie } from "cookies-next";

const Nav = () => {
  const habdleLogout = () => {
    deleteCookie("isUserLogIn");
  };
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/login">login</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/dashboard">Dashboard</Link>
        </li>
        <li>
          <a onClick={habdleLogout}>Logout</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
