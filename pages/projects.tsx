import { readFileSync } from "fs";
import Head from "next/head";
import { useState } from "react";
import ReactSelect, { components } from "react-select";
import Select from "react-select";
import ProjectRow, { Project } from "../components/project_row";

interface ProjectFilters {
  string: string | null,
  active: boolean | null,
  languages: string[] | null,
  organization: string | null,
}

export default function Projects({ projects }: { projects: Project[] }) {
  const [filters, setFilters] = useState({ string: null, active: null, languages: null, organization: null } as ProjectFilters)
  const languages = projects.flatMap(p => p.languages).reduce((acc, val) => val != undefined && acc.includes(val) ? acc : [...acc, val as string], [] as string[]).sort()

  function updateFilters(change: Partial<ProjectFilters>) {
    console.log(JSON.stringify(change))
    console.log("hi")
    setFilters({
      ...filters,
      ...change
    })
  }

  function Option(props: any) {
    return (
      <div key={props.label}>
        <components.Option {...props}>
          <input
            type="checkbox"
            checked={props.isSelected}
            onChange={() => null}
          />{" "}
          <label>{props.label}</label>
        </components.Option>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>Projects - Ludovic Mermod</title>
      </Head>
      <div id="projects">
        <div id="project-filters">
          <p>Filters:</p>

          <input placeholder='Search...' onChange={e => updateFilters({ string: e.target.value })} />

          <div>
            <label>Active:</label>
            <select onChange={e => updateFilters({ active: JSON.parse(e.target.value) })}>
              <option defaultChecked value="null">No filter</option>
              <option value="true">Active</option>
              <option value="false">Inactive</option>
            </select>
          </div>


          <div>
            <label>Languages:</label>
            <ReactSelect
              options={languages.map(l => { return { value: l, label: l } })}
              onChange={e => updateFilters({ languages: e.map(p => p.label) })}
              isMulti
              closeMenuOnSelect={false}
              hideSelectedOptions={false}
              components={{ Option }}
              className="react-select"
            />
          </div>

          <div>
            <label>Organization:</label>
            <select onChange={e => updateFilters({ organization: JSON.parse(e.target.value) })}>
              <option defaultChecked value="null" >No filter</option>
              <option value='""'>None</option>
              {projects.map(p => p.organization).reduce((acc, val) => val != undefined && acc.includes(val) ? acc : [...acc, val as string], [] as string[]).filter(o => o != undefined && o.length > 0).map(o => (<option value={`"${o}"`} key={o}>{o}</option>))}
            </select>
          </div>
        </div>

        <table id="project-table">
          <thead>
            <tr>
              <th key="name"><p>Name</p></th>
              <th key="active"><p>Active</p></th>
              <th key="description"><p>Description</p></th>
              <th key="languages"><p>Languages</p></th>
              <th key="organization"><p>Organization</p></th>
            </tr>
          </thead>
          <colgroup>
            <col style={{width: '15%'}} />
            <col style={{width: '5%'}} />
            <col style={{width: '40%'}} />
            <col style={{width: '25%'}} />
            <col style={{width: '15%'}} />
          </colgroup>
          <tbody>
            {projects.filter(p => {
              return (filters.string == null || filters.string.length == 0 || p.name.toLowerCase().includes(filters.string.toLowerCase()) || p.description.toLowerCase().includes(filters.string.toLowerCase()))
                && (filters.active == null || filters.active == p.active)
                && (filters.languages == null || filters.languages.length == 0 || filters.languages.every(l => p.languages.includes(l)))
                && (filters.organization == null || filters.organization == "" && p.organization == null || filters.organization == p.organization)
            }).map(p => <ProjectRow key={p.id} project={p} />)}
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