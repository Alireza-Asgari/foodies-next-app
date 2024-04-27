import Image from "next/image";
import Link from "next/link";
import logoImg from "@/assets/logo.png";
import classes from "./main-header.module.css";

import MainHeaderBackground from "./headerBackground";
import Navlink from "./nav-link";
export default function MainHeader() {
  return (
    <>
      <MainHeaderBackground />
      <header className={classes.header}>
        <Link href="/" className={classes.logo}>
          <Image src={logoImg} alt="A palet with food on it" priority />
          NextLevle Food
        </Link>
        <nav className={classes.nav}>
          <ul>
            <li>
              <Navlink href={"/meals"}>Browse meals</Navlink>
            </li>
            <li>
              <Navlink href={"/community"}> Foodies Community</Navlink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
