function ProjectList({projects}) {
  
  return (
    <div className="projects-container">
      {projects.map((project, index) => (
        <img
        key={index}
        src={project.img}
        alt={project.category}
        />
      ))}
    </div>
  )
}

export default ProjectList