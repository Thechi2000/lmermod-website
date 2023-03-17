import { readFileSync } from "fs";
import Head from "next/head";

interface Skill {
    name: string,
    level: number,
}

interface Skills {
    languages: Skill[],
    tools: Skill[],
}

function SkillsSet({ skills }: { skills: Skill[] }) {
    return (
        <>
            <ul>
                {skills.sort((a, b) => b.level - a.level || a.name.localeCompare(b.name)).map(l => <li key={l.name}><p>{l.name}: {"+".repeat(l.level) + "-".repeat(5 - l.level)}</p></li>)}
            </ul>
        </>
    )
}

export default function Skills({ skills }: { skills: Skills }) {
    return (
        <>
            <Head>
                <title>Competences - Ludovic Mermod</title>
            </Head>
            <div id="competences">
                <h2>Competences</h2>
                <p>Languages (with expertise level)</p>
                <SkillsSet skills={skills.languages} />

                <p>Tools/Frameworks</p>
                <SkillsSet skills={skills.tools} />
            </div>
        </>
    )
}


export async function getStaticProps() {
    return {
        props: {
            skills: JSON.parse(readFileSync('data/skills.json', 'utf8').toString())
        }
    }
}