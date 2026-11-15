import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { ProjectVisual } from "@/components/sections/project-visual";
import type { Project } from "@/types/portfolio";

type ProjectFeatureProps = {
  project: Project;
  index: number;
  total: number;
};

export function ProjectFeature({ project, index, total }: ProjectFeatureProps) {
  return (
    <article className={`project-feature${index === 0 ? " project-feature--primary" : ""}`}>
      {project.image && (
        <div className="project-image">
          <Image
            src={project.image.src}
            alt={project.image.alt}
            width={1200}
            height={800}
            sizes="(max-width: 760px) 100vw, 58vw"
          />
        </div>
      )}
      {!project.image && project.visual && <ProjectVisual visual={project.visual} />}
      <div className="project-content">
        <div className="project-title-row"><h3>{project.title}</h3><span className="project-index">{String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}</span></div>
        <p className="project-subtitle">{project.subtitle}</p>
        <p className="project-category">{project.category}</p>
        <p className="project-summary">{project.summary}</p>
        <p className="project-details">{project.details}</p>
        <ul className="project-highlights" aria-label="Destaques do projeto">
          {project.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
        </ul>
        {project.stack.length > 0 && (
          <ul className="project-stack" aria-label="Tecnologias e áreas do projeto">
            {project.stack.map((technology) => <li key={technology}>{technology}</li>)}
          </ul>
        )}
        {(project.demo || project.repository) && (
          <div className="project-links">
            {project.demo && <a href={project.demo.href} target="_blank" rel="noopener noreferrer">{project.demo.label}<ArrowUpRight aria-hidden="true" /></a>}
            {project.repository && <a href={project.repository.href} target="_blank" rel="noopener noreferrer">{project.repository.label}<ArrowUpRight aria-hidden="true" /></a>}
          </div>
        )}
      </div>
    </article>
  );
}
