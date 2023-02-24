import { readFileSync } from "fs";
import Head from "next/head";

interface Language {
    name: string,
    years: number,
    level: number,
}

export default function Languages({ languages }: { languages: Language[] }) {
    return (
        <>
          <Head>
              <title>Competences - Ludovic Mermod</title>
          </Head>
          <div id="competences">
            <h2>Competences</h2>
            <p>Languages (with experience and expertise level)</p>
            <ul>
              {languages.sort((a, b) => b.years - a.years || b.level - a.level || a.name.localeCompare(b.name)).map(l => <li key={l.name}><p>{l.name}: {l.years == 0 ? '< 1' : l.years.toString()} years ({l.level}/5)</p></li>)}
            </ul>
          </div>
        </>
    )
}


export async function getStaticProps() {
    return {
        props: {
            languages: JSON.parse(readFileSync('data/languages.json', 'utf8').toString())
        }
    }
}