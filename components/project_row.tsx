import Link from "next/link"

export interface Project {
    id: string,

    name: string,
    description: string,

    file?: string,
    url?: string,

    languages: string[],
    organization?: string,
    repository?: string,
    active: boolean
}

export default function ProjectRow({ project: { id, name, description, languages, organization, repository, active, file, url } }: { project: Project }) {
    return (
        <tr key={id}>
            <td key="name">{
                file == undefined && url == undefined
                    ? <p>{name}</p>
                    : <Link href={`/projects/${id}`}>{name}</Link>
            }
            </td>
            <td key="active"><p>{active ? 'Yes' : 'No'}</p></td>
            <td key="description"><p>{description}</p></td>
            <td key="languages"><p>{languages.length == 0 ? 'None' : languages.join(', ')}</p></td>
            <td key="organization"><p>{organization || 'None'}</p></td>
            <td key="repository">{repository == null ? <p>None</p> : <a href={repository}>Repo</a>}</td>
        </tr>
    )
}