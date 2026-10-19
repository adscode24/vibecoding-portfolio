import { projects } from "@/data/site";
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
        description={`${shipped} projects across logistics, manufacturing, education, and brand. Most went from idea to a live URL in under a week. Filter by stack to dig in.`}
      />

      <div className="mt-12">
        <ProjectExplorer projects={projects} />
      </div>

      <Reveal>
        <p className="mt-10 text-sm text-muted">
          Want the full source of everything I build?{" "}
          <a
            href="https://github.com/adscode24"
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
