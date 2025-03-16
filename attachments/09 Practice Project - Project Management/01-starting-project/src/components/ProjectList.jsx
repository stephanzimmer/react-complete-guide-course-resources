import { useContext } from 'react'
import { ProjectContext } from "../store/projects-context";

export default function ProjectList({...props}) {
  const { projects, addProject } = useContext(ProjectContext);

  const projectList = projects.map((p, i) => <li key={i}>{p.name}</li>);

  return(
    <ul>
      {projectList}
    </ul>
  )
}