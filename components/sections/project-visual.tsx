import type { ProjectVisual as ProjectVisualData } from "@/types/portfolio";

export function ProjectVisual({ visual }: { visual: ProjectVisualData }) {
  return (
    <figure className={`project-visual project-visual--${visual.kind}`}>
      <div className="visual-heading"><span>{visual.label}</span><span aria-hidden="true" className="visual-heading-mark" /></div>

      {(visual.kind === "architecture" || visual.kind === "tooling") && (
        <div className="visual-groups">
          {visual.groups.map((group) => (
            <div className="visual-group" key={group.label}>
              <span className="visual-group-label">{group.label}</span>
              <div className="visual-items">
                {group.items.map((item) => <span className="visual-item" key={item}>{item}</span>)}
              </div>
            </div>
          ))}
        </div>
      )}

      {visual.kind === "endpoints" && (
        <div className="visual-endpoints">
          {visual.endpoints.map((endpoint) => (
            <div className="visual-endpoint" key={`${endpoint.method}-${endpoint.path}`}>
              <span>{endpoint.method}</span><code>{endpoint.path}</code>
            </div>
          ))}
        </div>
      )}

      {visual.kind === "workflow" && (
        <ol className="visual-workflow">
          {visual.steps.map((step) => <li key={step}><code>{step}</code></li>)}
        </ol>
      )}

      <figcaption>{visual.caption}</figcaption>
    </figure>
  );
}
