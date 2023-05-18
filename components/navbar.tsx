import Link from "next/link";
import { useRouter } from "next/router";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About me", href: "/aboutme" },
  { name: "Projects", href: "/projects" },
  { name: "Socials", href: "/socials" },
  { name: "Skills", href: "/skills" },
];

export default function NavBar() {
  const router = useRouter();

  return (
    <div id="navbar">
      {navigation.map((item) => (
        <Link
          key={item.name}
          href={item.href}
          className={(router.asPath == item.href ? "current-navbar-item" : "") + " navbar-item"}
        >
          <p style={{ fontSize: "1.5em" }}>{item.name}</p>
        </Link>
      ))}
    </div>
  );
}
