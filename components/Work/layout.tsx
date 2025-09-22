import "./work.css";

const WorkSection = () => {
  const projects = [
    {
      id: 1,
      title: "Manufacturing",
      image: "/manufacturing2.jpg",
      className: "project-card-large",
    },
    {
      id: 2,
      title: "Crypto",
      image: "/crypto.jpeg",
      className: "project-card-medium",
    },
    {
      id: 3,
      title: "Retail",
      image: "/retail.jpeg",
      className: "project-card-tall",
    },
    {
      id: 4,
      title: "SaaS",
      image: "/saas.jpeg",
      className: "project-card-large",
    },
    {
      id: 5,
      title: "Web3",
      image: "/web3.jpg",
      className: "project-card-medium",
    },
  ]

  return (
    <section id="portfolio" className="work-section">
      <div className="work-container">
        <div className="work-header">
          <h2 className="work-title">
            Industry <span className="gradient-pill">Exposure</span>
          </h2>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className={`project-card ${project.className}`}>
              <div className="project-image">
                <img src={project.image || "/placeholder.svg"} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-info">
                    <h3 className="project-title">{project.title}</h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WorkSection
