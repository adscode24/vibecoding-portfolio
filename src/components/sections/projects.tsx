import { projects, siteConfig } from "@/data/site";
import { SectionHeading, SectionShell } from "@/components/section";
import { Reveal } from "@/components/reveal";
import { ProjectExplorer } from "@/components/sections/project-explorer";

export function Projects() {
  const shipped = projects.length;

  return (
    <SectionShell id="work">
      <SectionHeading
        eyebrow="Selected work"
        title="Things I built and actually shipped"
        description={`${shipped} products across logistics, manufacturing, and personal finance. Most went from idea to a live URL in under a week — open any card for the detail.`}
      />

      <div className="mt-12">
        <ProjectExplorer projects={projects} />
      </div>

      <Reveal>
        <p className="mt-10 text-sm text-muted">
          Want to see how these are built?{" "}
          <a
            href={siteConfig.github}
            target="_blank"
            rel="noreferrer noopener"
            className="font-medium text-ink underline underline-offset-4"
          >
            Visit my GitHub profile
          </a>
          .
        </p>
      </Reveal>
    </SectionShell>
  );
}
