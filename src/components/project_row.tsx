import Link from "next/link";
import { Project } from "../../data";

export default function ProjectRow({
  project: { id, name, description, languages, organization, repository, active, file, url },
}: {
  project: Project;
}) {
  return (
    <tr key={id}>
      <td key="name">
        {file == undefined && url == undefined ? (
          <a href={repository} target="_blank" rel="noreferrer">
            {name}
          </a>
        ) : (
          <Link href={`/projects/${id}`}>{name}</Link>
        )}
      </td>
      <td key="active">
        <p>{active ? "Yes" : "No"}</p>
      </td>
      <td key="description">
        <p>{description}</p>
      </td>
      <td key="languages">
        <p>{languages.length == 0 ? "None" : languages.join(", ")}</p>
      </td>
      <td key="organization">
        <p>{organization || "None"}</p>
      </td>
    </tr>
  );
}
