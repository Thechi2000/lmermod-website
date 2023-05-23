import { readFileSync } from "fs";
import Head from "next/head";
import Dropdown, { DropdownElement } from "../components/dropdown";
import { useState } from "react";

interface Skill {
  name: string;
  description: string,
  level: number;
  type: string;
  language?: string;
  url: string,
}

interface SkillFilters {
  search: string | null;
  level: number | null;
  type: string | null;
  language: string | null;
}

function SkillsSet({ skills }: { skills: Skill[] }) {
  return (
    <>
      <ul>
        {skills
          .sort((a, b) => b.level - a.level || a.name.localeCompare(b.name))
          .map((l) => (
            <li key={l.name}>
              <p>
                {l.name}: {"+".repeat(l.level) + "-".repeat(5 - l.level)}
              </p>
            </li>
          ))}
      </ul>
    </>
  );
}

export default function Skills({ skills }: { skills: Skill[] }) {
  const [filters, setFilters] = useState({
    search: null,
    level: null,
    type: null,
    language: null,
  } as SkillFilters);

  const types = [...new Set(skills.map(s => s.type).sort())];
  const languages = [...new Set(skills.map(s => s.language).filter(l => l != null).sort())];

  function updateFilters(change: Partial<SkillFilters>) {
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
        <title>Competences - Ludovic Mermod</title>
      </Head>
      <div id="projects">
        <div id="project-filters">
          <input
            placeholder="Search..."
            onChange={(e) => updateFilters({ search: e.target.value })}
            className="border-gray-400 border-solid border bg-slate-800 p-3 m-0"
          />

          <div>
            <Dropdown label="Type">
              <DropdownElement>
                <label onClick={() => updateFilters({ type: null })}>
                  <input type="radio" checked={filters.type == null} readOnly />
                  No filter
                </label>
              </DropdownElement>
              {types.map((t) => (
                <DropdownElement key={t}>
                  <label onClick={() => updateFilters({ type: t })}>
                    <input type="radio" checked={filters.type === t} readOnly />
                    {t}
                  </label>
                </DropdownElement>
              )) as any}
            </Dropdown>
          </div>

          <div>
            <Dropdown label="Language">
              <DropdownElement>
                <label onClick={() => updateFilters({ language: null })}>
                  <input type="radio" checked={filters.language == null} readOnly />
                  No filter
                </label>
              </DropdownElement>
              {languages.map((l) => (
                <DropdownElement key={l}>
                  <label onClick={() => updateFilters({ language: l })}>
                    <input type="radio" checked={filters.language === l} readOnly />
                    {l}
                  </label>
                </DropdownElement>
              )) as any}
            </Dropdown>
          </div>

          <div>
            <Dropdown label="Level">
              <DropdownElement>
                <label onClick={() => updateFilters({ level: null })}>
                  <input type="radio" checked={filters.level == null} readOnly />
                  No filter
                </label>
              </DropdownElement>
              {[...Array(5).keys()].map(n => n + 1).map(l => (
                <DropdownElement key={l}>
                  <label onClick={() => updateFilters({ level: l })}>
                    <input type="radio" checked={filters.level === l} readOnly />
                    {l}
                  </label>
                </DropdownElement>
              )) as any}
            </Dropdown>
          </div>
        </div>

        <div className="project-table-container">
          <table id="project-table">
            <thead>
              <tr>
                <th key="name">
                  <p>Name</p>
                </th>
                <th key="description">
                  <p>Description</p>
                </th>
                <th key="type">
                  <p>Type</p>
                </th>
                <th key="language">
                  <p>Language</p>
                </th>
                <th key="level">
                  <p>Level</p>
                </th>
              </tr>
            </thead>
            <colgroup>
              <col style={{ width: "15%" }} />
              <col style={{ width: "40%" }} />
              <col style={{ width: "15%" }} />
              <col style={{ width: "10%" }} />
              <col style={{ width: "5%" }} />
            </colgroup>
            <tbody>

              {skills
                .filter(s => {
                  return (
                    (filters.search == null ||
                      filters.search.length == 0 ||
                      s.name.toLowerCase().includes(filters.search.toLowerCase()) ||
                      s.description.toLowerCase().includes(filters.search.toLowerCase())) &&
                    (filters.type == null || filters.type == s.type) &&
                    (filters.language == null || filters.language == s.language) &&
                    (filters.level == null || filters.level == s.level)
                  );
                })
                .map(s => (
                  <tr key={s.name}>
                    <td key="name">
                        <a href={s.url} target="_blank" rel="noreferrer">
                          {s.name}
                        </a>
                    </td>
                    <td key="description">
                      <p>{s.description}</p>
                    </td>
                    <td key="type">
                      <p>{s.type}</p>
                    </td>
                    <td key="language">
                      <p>{s.language || "-"}</p>
                    </td>
                    <td key="Level">
                      <p>{s.level}</p>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div >
    </>
  );
}

export async function getServerSideProps() {
  return {
    props: {
      skills: await fetch("https://lmermod.ch/data/skills.json").then((p) => p.json()),
    },
  };
}
