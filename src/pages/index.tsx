import Head from "next/head";

import Ferris from "../assets/ferris-gesture.svg";
import AboutMe from "../components/aboutme";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home - Ludovic Mermod</title>
      </Head>
      <div>
        <div id="home">
          <div>
            <h1>Welcome to my website&nbsp;!</h1>
            <h2>Ludovic Mermod</h2>
          </div>

          <div>
            <Ferris id={"ferris"} />
          </div>
        </div>
        <AboutMe />
      </div>
    </>
  );
}
