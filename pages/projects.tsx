import { readFileSync } from "fs";
import Head from "next/head";
import { useState } from "react";
import ReactSelect, { components } from "react-select";
import Select from "react-select";
import ProjectRow, { Project } from "../components/project_row";
import Dropdown, { DropdownElement } from "../components/dropdown";

interface ProjectFilters {
  string: string | null;
  active: boolean | null;
  languages: string[] | null;
  organization: string | null;
}

export default function Projects({ projects }: { projects: Project[] }) {
  const [filters, setFilters] = useState({
    string: null,
    active: null,
    languages: null,
    organization: null,
  } as ProjectFilters);
  const languages = projects
    .flatMap((p) => p.languages)
    .reduce((acc, val) => (val != undefined && acc.includes(val) ? acc : [...acc, val as string]), [] as string[])
    .sort();

  function updateFilters(change: Partial<ProjectFilters>) {
    console.log(JSON.stringify(change));
    console.log("hi");
    setFilters({
      ...filters,
      ...change,
    });
  }

  return (
    <>
      <Head>
        <title>Projects - Ludovic Mermod</title>
      </Head>
      <div id="projects">
        <div id="project-filters">
          <input
            placeholder="Search..."
            onChange={(e) => updateFilters({ string: e.target.value })}
            className="border-gray-400 border-solid border bg-slate-800 p-3 m-0"
          />

          <div>
            <Dropdown label="Language">
              {languages.map((l) => (
                <DropdownElement key={l}>
                  <label>
                    <input
                      type="checkbox"
                      value={l}
                      name="language"
                      onChange={(e) => {
                        var filt = [...(filters.languages || [])];
                        if (e.target.checked) {
                          filt.push(l);
                        } else {
                          filt.splice(filt.indexOf(l), 1);
                        }
                        console.log(filt);
                        updateFilters({ languages: filt });
                      }}
                    />
                    {l}
                  </label>
                </DropdownElement>
              ))}
            </Dropdown>
          </div>

          <div>
            <Dropdown label="Activity">
              <DropdownElement>
                <label onClick={() => updateFilters({ active: null })}>
                  <input type="radio" checked={filters.active == null} readOnly />
                  No filter
                </label>
              </DropdownElement>
              <DropdownElement>
                <label onClick={() => updateFilters({ active: true })}>
                  <input type="radio" checked={filters.active === true} readOnly />
                  Active
                </label>
              </DropdownElement>
              <DropdownElement>
                <label onClick={() => updateFilters({ active: false })}>
                  <input type="radio" checked={filters.active === false} readOnly />
                  Inactive
                </label>
              </DropdownElement>
            </Dropdown>
          </div>

          <div>
            <Dropdown label="Organization">
              <DropdownElement>
                <label onClick={() => updateFilters({ organization: null })}>
                  <input type="radio" checked={filters.organization == null} readOnly />
                  No filter
                </label>
              </DropdownElement>
              {
                projects
                  .map((p) => p.organization)
                  .reduce(
                    (acc, val) => (val != undefined && acc.includes(val) ? acc : [...acc, val as string]),
                    [] as string[]
                  )
                  .filter((o) => o != undefined && o.length > 0)
                  .map((o) => (
                    <DropdownElement key={o}>
                      <label onClick={() => updateFilters({ organization: o })}>
                        <input type="radio" key={o} checked={filters.organization === o} readOnly />
                        {o}
                      </label>
                    </DropdownElement>
                  )) as any
              }
            </Dropdown>
          </div>
        </div>

        <table id="project-table">
          <thead>
            <tr>
              <th key="name">
                <p>Name</p>
              </th>
              <th key="active">
                <p>Active</p>
              </th>
              <th key="description">
                <p>Description</p>
              </th>
              <th key="languages">
                <p>Languages</p>
              </th>
              <th key="organization">
                <p>Organization</p>
              </th>
            </tr>
          </thead>
          <colgroup>
            <col style={{ width: "15%" }} />
            <col style={{ width: "5%" }} />
            <col style={{ width: "40%" }} />
            <col style={{ width: "25%" }} />
            <col style={{ width: "15%" }} />
          </colgroup>
          <tbody>
            {projects
              .filter((p) => {
                return (
                  (filters.string == null ||
                    filters.string.length == 0 ||
                    p.name.toLowerCase().includes(filters.string.toLowerCase()) ||
                    p.description.toLowerCase().includes(filters.string.toLowerCase())) &&
                  (filters.active == null || filters.active == p.active) &&
                  (filters.languages == null ||
                    filters.languages.length == 0 ||
                    filters.languages.every((l) => p.languages.includes(l))) &&
                  (filters.organization == null ||
                    (filters.organization == "" && p.organization == null) ||
                    filters.organization == p.organization)
                );
              })
              .map((p) => (
                <ProjectRow key={p.id} project={p} />
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      projects: JSON.parse(readFileSync("data/projects.json", "utf8").toString()),
    },
  };
}
