import { useTheme } from "next-themes";
import Link from "next/link";
import { useRouter } from "next/router";

import ThemeIcon from "assets/theme-light-dark.svg"

const navigation = [
  { name: "Home", href: "/" },
  { name: "About me", href: "/aboutme" },
  { name: "Projects", href: "/projects" },
  { name: "Skills", href: "/skills" },
];

export default function NavBar() {
  const router = useRouter();
  const { theme, setTheme } = useTheme();

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
      <ThemeIcon id={"theme-button"} className={theme} fill={theme === "light" ? "white" : "black"} onClick={() => {setTheme(theme === "light" ? "dark" : "light")}} />
    </div>
  );
}
