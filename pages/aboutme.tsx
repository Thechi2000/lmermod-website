import Head from "next/head";
import Link from "next/link";

import AboutMeSection from "../components/aboutme_section";

import epfl_logo from "assets/epfl-logo.svg"
import agep_logo from "assets/agep-logo.png"
import clic_logo from "assets/clic-logo.svg"
import rust_logo from "assets/rust-logo.svg"


export default function AboutMe(){
    return (
      <>
        <Head>      
            <title>Home - Ludovic Mermod</title>
        </Head>
        <div id="aboutme">
          <AboutMeSection logo={{src: epfl_logo, alt: 'EPFL'}} reversed={false}>
            <p>
              &emsp;
              I study at the Swiss university <a href="https://www.epfl.ch" target="_blank">EPFL</a> since 2020. 
              I am taking the bachelor's degree in computer science, and currently in my third year of study.
              I also work for two student associations and as a teaching assistant.<br/>
              <Link href="/aboutme/epfl">Learn&nbsp;more...</Link>
            </p>
          </AboutMeSection>

          <div className="subsection">
            <div className="separator" />

            <AboutMeSection logo={{src: agep_logo, alt: 'AGEPOLY'}} reversed={false}>
              <p>
                &emsp;
                I have been working at the <a href="https://agepoly.ch" target="_blank">AGEPOLY</a>, the general association of polytechnic students, since spring 2022 as part of the IT team, as a backend developper.
                My main projects there are <Link href="/projects/agevote">AGEVoté</Link> and <Link href="/projects/whiskey">Whiskey</Link>.
              </p>
            </AboutMeSection>
          
            <div className="separator" />
          
            <AboutMeSection logo={{src: clic_logo, alt: 'CLIC'}} reversed={true}>
              <p>
                &emsp;
                Since autumn 2022, I am in the IT and Logistique/Event team of the <a href="https://clic.epfl.ch/" target="_blank">CLIC</a>, the student association of the IC faculty. 
                I am building <Link href="/projects/reuform">Reuform</Link> and working in the team for their <Link href="/projects/clic-website">website</Link>.
              </p>
            </AboutMeSection>
          
            <div className="separator" />
          
            <AboutMeSection reversed={false}>
              <p>
                &emsp;
                I am working as a teaching assistant for the <a href="https://edu.epfl.ch/coursebook/en/system-oriented-programming-CS-207" target="_blank">System oriented programming</a> and <a href="https://edu.epfl.ch/coursebook/en/system-programming-project-CS-212" target="_blank">System programming project</a>.
                I also prepare the project for the next semester.
              </p>
            </AboutMeSection>
          </div>

          <div className="separator" />
          <AboutMeSection logo={{src: rust_logo, alt: 'Rust'}} reversed={true}>
            <p>
              &emsp;
              Over the years, I have been learning quite a few languages, the most important being Rust, C/C++ and Java.
              Get a full overview <Link href="/aboutme/code">here</Link>.
            </p>
          </AboutMeSection>
        </div>
      </>
    )
}