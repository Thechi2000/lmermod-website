import Image from "next/image";
import Link from "next/link";

import logo from 'assets/logo.svg'
import { forwardRef } from "react";

export default function NavBar() {
  const Logo = forwardRef(({ onClick, href }, ref) => <a href={href} onClick={onClick} ref={ref}><Image src={logo} alt="logo" style={{ width: "80px", height: "80px", paddingRight: "40px" }} /></a>)


  return (
    <div className="navbar">
      <Link href="/" passHref legacyBehavior><Logo /></Link>
      <div id="navbar-links">
        <Link href="/">Home</Link>
        <Link href="/aboutme">About me</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/socials">Socials</Link>
        <Link href="/competences">Competences</Link>
      </div>
    </div>
  )
}