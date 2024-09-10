import type { AppProps } from "next/app";

import "../styles/global.css";
import "../styles/aboutme.css";
import "../styles/projects.css";
import "../styles/competences.css";
import "../styles/socials.css";
import "../styles/navbar.css";
import "../styles/home.css";
import "../styles/footer.css";
import "../styles/skills.css";
import "../styles/table.css";

import NavBar from "../components/navbar";
import Footer from "../components/footer";
import { ThemeProvider } from "next-themes";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <NavBar />
      <Component {...pageProps} />
      <Footer />
    </ThemeProvider>
  );
}
