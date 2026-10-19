import { aboutParagraphs, siteConfig } from "@/data/site";
import { SectionHeading, SectionShell } from "@/components/section";
import { Reveal } from "@/components/reveal";

export function About() {
  return (
    <SectionShell id="about" className="bg-surface">
      <SectionHeading
        eyebrow="About"
        title="A builder, not a bystander"
        description={siteConfig.intro}
      />

      <div className="mt-12 grid gap-10 lg:grid-cols-[1.5fr_1fr] lg:gap-14">
        <div className="space-y-5">
          {aboutParagraphs.map((paragraph, index) => (
            <Reveal key={paragraph} delay={index * 70}>
              <p className="text-base leading-relaxed text-ink/85 text-pretty">
                {paragraph}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <dl className="rounded-2xl border border-line bg-white p-6">
            {siteConfig.facts.map((fact, index) => (
              <div
                key={fact.label}
                className={`py-3 ${
                  index > 0 ? "border-t border-line" : "pt-0"
                } ${index === siteConfig.facts.length - 1 ? "pb-0" : ""}`}
              >
                <dt className="font-mono text-[11px] uppercase tracking-[0.15em] text-faint">
                  {fact.label}
                </dt>
                <dd className="mt-1 text-sm font-medium text-ink">
                  {fact.value}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </SectionShell>
  );
}
