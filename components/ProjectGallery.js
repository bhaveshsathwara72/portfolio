import { useContext } from 'react'
import AppContext from '../context/AppContext'
import Image from 'next/image'
 
export default function ProjectGallery() {
  const { projects } = useContext(AppContext)
 
  return (
<div className="grid grid-cols-2 gap-4 p-4">
      {projects.map((project, index) => (
<div key={index} className="border p-2">
<h3>{project.name}</h3>
          {project.image && (
<Image
              src={`https://sathwarainfotech.com/portfolio/admin/public/${project.image}`}
              alt={project.name}
              width={400}
              height={300}
              className="rounded"
            />
          )}
</div>
      ))}
</div>
  )
}