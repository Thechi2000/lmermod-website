import Image from "next/image";
import Link from "next/link";

import logo from 'assets/logo.svg'

export default function NavBar(){
    return (
        <div className="navbar">
          <Image src={logo} alt="logo" style={{width: "80%", height: "fit-content", paddingBottom: "25%"}}/>
          <Link href="/">Home</Link>
          <Link href="/aboutme">About me</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/socials">Socials</Link>
          <Link href="/competences">Competences</Link>
        </div>
    )
}