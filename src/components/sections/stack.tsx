import { stackGroups } from "@/data/site";
import { SectionHeading, SectionShell } from "@/components/section";
import { Reveal } from "@/components/reveal";

export function Stack() {
  return (
    <SectionShell id="stack">
      <SectionHeading
        eyebrow="Toolkit"
        title="What I reach for"
        description="The tools I actually use day to day. AI coding assistants sit alongside the fundamentals rather than replacing them — I still read and review every line that ships."
      />

      <div className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
        {stackGroups.map((group, index) => (
          <Reveal key={group.title} delay={index * 60}>
            <h3 className="text-sm font-semibold tracking-tight">
              {group.title}
            </h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-lg border border-line bg-white px-2.5 py-1.5 text-sm text-muted"
                >
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
