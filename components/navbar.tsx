import Image from "next/image";
import Link from "next/link";

import logo from 'assets/logo.svg'
import { forwardRef } from "react";

export default function NavBar() {
  return (
    <div className="navbar">
      <Image src={logo} alt="logo" style={{ width: "80px", height: "80px", paddingRight: "40px" }} />
      <div id="navbar-links">
        <Link href="/">Home</Link>
        <Link href="/aboutme">About me</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/socials">Socials</Link>
        <Link href="/skills">Skills</Link>
      </div>
    </div>
  )
}