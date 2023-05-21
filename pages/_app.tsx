import type { AppProps } from "next/app";
import "styles/global.css";
import "styles/aboutme.css";
import "styles/projects.css";
import "styles/competences.css";
import "styles/socials.css";
import "styles/navbar.css";
import "styles/home.css";
import "styles/footer.css";
import NavBar from "../components/navbar";
import Footer from "../components/footer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
