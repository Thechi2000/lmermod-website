import Link from "next/link";

export default function NavBar(){
    return (
        <div className="navbar">
            <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/aboutme">About me</Link></li>
                <li><Link href="/projects">Projects</Link></li>
                <li><Link href="/socials">Socials</Link></li>
            </ul>
        </div>
    )
}