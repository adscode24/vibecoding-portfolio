"use client";

import { useState } from "react";
import type { Project } from "@/data/site";
import { digiLogos } from "@/components/logos/digi-logos";
import { ArrowUpRight, Check } from "@/components/icons";

type ProjectCardProps = {
  project: Project;
};

function ProjectCard({ project }: ProjectCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const detailsId = `project-details-${project.slug}`;
  const Logo = digiLogos[project.logo];

  return (
    <article className="flex flex-col rounded-2xl border border-line bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_-16px_rgba(0,0,0,0.25)]">
      <div className="flex items-start justify-between gap-4">
        <Logo className="h-7 w-auto max-w-[9rem]" />
        <span className="mt-1 inline-flex shrink-0 items-center gap-1.5 rounded-full border border-line px-2.5 py-1 text-[11px] text-muted">
          <span
            className={`h-1.5 w-1.5 rounded-full ${
              project.status === "Live" ? "bg-emerald-500" : "bg-faint"
            }`}
          />
          {project.status}
        </span>
      </div>

      <h3 className="sr-only">{project.title}</h3>

      <p className="mt-4 text-sm leading-relaxed text-muted">{project.summary}</p>

      {isOpen ? (
        <div id={detailsId} className="mt-5 border-t border-line pt-5">
          <p className="text-sm leading-relaxed text-ink/80">
            {project.description}
          </p>
          <ul className="mt-4 space-y-2">
            {project.highlights.map((highlight) => (
              <li key={highlight} className="flex gap-2.5 text-sm text-muted">
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
          onClick={() => setIsOpen((open) => !open)}
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
}

export function ProjectExplorer({ projects }: { projects: Project[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {projects.map((project) => (
        <ProjectCard key={project.slug} project={project} />
      ))}
    </div>
  );
}
