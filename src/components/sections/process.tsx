import { processSteps } from "@/data/site";
import { SectionHeading, SectionShell } from "@/components/section";
import { Reveal } from "@/components/reveal";

export function Process() {
  return (
    <SectionShell id="process" className="bg-surface">
      <SectionHeading
        eyebrow="How I work"
        title="The vibe coding loop"
        description="Not magic, and not typing prompts until something renders. It's a tight loop of understanding the problem, scoping it down, building with AI as a pair, and shipping before the idea goes stale."
      />

      <ol className="mt-12 grid gap-4 sm:grid-cols-2">
        {processSteps.map((item, index) => (
          <Reveal key={item.step} delay={index * 80}>
            <li className="flex h-full flex-col rounded-2xl border border-line bg-white p-6">
              <span className="font-mono text-xs font-medium text-accent">
                {item.step}
              </span>
              <h3 className="mt-3 text-lg font-semibold tracking-tight">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {item.description}
              </p>
            </li>
          </Reveal>
        ))}
      </ol>
    </SectionShell>
  );
}
