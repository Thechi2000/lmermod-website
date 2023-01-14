import { readFileSync } from "fs";
import Head from "next/head";
import ProjectRow, { Project } from "../components/project_row";

export default function Projects({ projects }: { projects: Project[] }) {
  return (
    <>
      <Head>
        <title>Projects - Ludovic Mermod</title>
      </Head>
      <div id="projects">
        <p>My projects:</p>

        <table id="project-table">
          <tbody>
            <thead>
              <tr>
                <th key="name"><p>Name</p></th>
                <th key="active"><p>Active</p></th>
                <th key="description"><p>Description</p></th>
                <th key="languages"><p>Languages</p></th>
                <th key="organization"><p>Organization</p></th>
                <th key="repository"><p>Repository</p></th>
              </tr>
            </thead>
            {projects.map(p => <ProjectRow key={p.id} project={p} />)}
          </tbody>
        </table>
      </div>
    </>
  )
}

export async function getStaticProps() {
  return {
    props: {
      projects: JSON.parse(readFileSync('data/projects.json', 'utf8').toString())
    }
  }
}