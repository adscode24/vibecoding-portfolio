"use client";

import { useMemo, useState } from "react";
import type { Project } from "@/data/site";
import { ArrowUpRight, Check } from "@/components/icons";

type ProjectExplorerProps = {
  projects: Project[];
};

export function ProjectExplorer({ projects }: ProjectExplorerProps) {
  const tags = useMemo(() => {
    const seen = new Set<string>();
    for (const project of projects) {
      for (const tag of project.stack) seen.add(tag);
    }
    return ["All", ...Array.from(seen)];
  }, [projects]);

  const [activeTag, setActiveTag] = useState("All");
  const [expandedSlug, setExpandedSlug] = useState<string | null>(null);

  const visibleProjects =
    activeTag === "All"
      ? projects
      : projects.filter((project) => project.stack.includes(activeTag));

  return (
    <div>
      <div className="flex flex-wrap items-center gap-2">
        {tags.map((tag) => {
          const isActive = tag === activeTag;
          return (
            <button
              key={tag}
              type="button"
              onClick={() => setActiveTag(tag)}
              aria-pressed={isActive}
              className={`rounded-full border px-3.5 py-1.5 text-xs font-medium transition-colors ${
                isActive
                  ? "border-ink bg-ink text-white"
                  : "border-line bg-white text-muted hover:border-ink hover:text-ink"
              }`}
            >
              {tag}
            </button>
          );
        })}
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {visibleProjects.map((project) => {
          const isOpen = expandedSlug === project.slug;
          const detailsId = `project-details-${project.slug}`;

          return (
            <article
              key={project.slug}
              className="flex flex-col rounded-2xl border border-line bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_-16px_rgba(0,0,0,0.25)]"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-lg font-semibold tracking-tight">
                  {project.title}
                </h3>
                <span className="mt-0.5 inline-flex shrink-0 items-center gap-1.5 rounded-full border border-line px-2.5 py-1 text-[11px] text-muted">
                  <span
                    className={`h-1.5 w-1.5 rounded-full ${
                      project.status === "Live" ? "bg-emerald-500" : "bg-faint"
                    }`}
                  />
                  {project.status}
                </span>
              </div>

              <p className="mt-2 text-sm leading-relaxed text-muted">
                {project.summary}
              </p>

              {isOpen ? (
                <div id={detailsId} className="mt-5 border-t border-line pt-5">
                  <p className="text-sm leading-relaxed text-ink/80">
                    {project.description}
                  </p>
                  <ul className="mt-4 space-y-2">
                    {project.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex gap-2.5 text-sm text-muted"
                      >
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}

              <div className="mt-6 flex flex-wrap gap-1.5">
                {project.stack.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md bg-surface px-2 py-1 font-mono text-[11px] text-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex items-center gap-4 border-t border-line pt-4">
                <button
                  type="button"
                  onClick={() =>
                    setExpandedSlug(isOpen ? null : project.slug)
                  }
                  aria-expanded={isOpen}
                  aria-controls={detailsId}
                  className="text-sm font-medium text-ink underline-offset-4 hover:underline"
                >
                  {isOpen ? "Less" : "Details"}
                </button>

                {project.live ? (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-1 text-sm text-muted transition-colors hover:text-ink"
                  >
                    Live site
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                ) : null}

                {project.repo ? (
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-1 text-sm text-muted transition-colors hover:text-ink"
                  >
                    Source
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                ) : null}

                <span className="ml-auto font-mono text-xs text-faint">
                  {project.year}
                </span>
              </div>
            </article>
          );
        })}
      </div>

      {visibleProjects.length === 0 ? (
        <p className="mt-8 text-sm text-muted">No projects in this category.</p>
      ) : null}
    </div>
  );
}
