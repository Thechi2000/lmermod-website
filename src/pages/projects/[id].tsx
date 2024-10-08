import { GetServerSidePropsContext, GetServerSidePropsResult } from "next";
import Head from "next/head";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { Project } from "../../../data";

interface ServerProps {
  markdown: string | null;
  project: Project;
}

export default function Render({
  markdown,
  project: { name, active, description, languages, organization, repository },
}: ServerProps) {
  return (
    <>
      <Head>
        <title>{name} - Ludovic Mermod</title>
      </Head>
      <div id="project-md">
        <h1>Overview</h1>
        <ul>
          <li key="name">Name: {name}</li>
          <li key="active">Active: {active ? "Yes" : "No"}</li>
          <li key="description">Description: {description}</li>
          <li key="languages">Languages: {languages.length == 0 ? "None" : languages.join(", ")}</li>
          <li key="organization">Organization: {organization || "None"}</li>
          <li key="repository">
            Repository: {repository == undefined ? <p>None</p> : <a href={repository}>{repository}</a>}
          </li>
        </ul>
        <div className="separator" />
        {markdown != null ? (
          <div className="markdown">
            <ReactMarkdown>{markdown}</ReactMarkdown>
          </div>
        ) : (
          <p>No full description is available</p>
        )}
      </div>
    </>
  );
}

export async function getServerSideProps(
  context: GetServerSidePropsContext
): Promise<GetServerSidePropsResult<ServerProps>> {
  let { id } = context.query;

  let project = ((await fetch("https://lmermod.ch/data/projects.json").then((p) => p.json())) as Project[]).find(
    (p) => p.id == id
  );
  if (project == undefined) {
    return {
      notFound: true,
    };
  }

  let { file, url } = project as Project;

  let markdown =
    file != undefined
      ? await fetch("https://lmermod.ch/data/projects./" + file)
          .then((p) => p.text())
          .toString()
      : null;

  if (url != undefined) {
    let res = await fetch(url as string);
    markdown = await res.text();
  }

  return {
    props: {
      markdown: markdown,
      project: project,
    },
  };
}
