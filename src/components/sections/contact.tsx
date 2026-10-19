import { siteConfig } from "@/data/site";
import { SectionHeading, SectionShell } from "@/components/section";
import { Reveal } from "@/components/reveal";
import { ArrowUpRight, Github, Mail } from "@/components/icons";

export function Contact() {
  const hasEmail = siteConfig.email.trim().length > 0;

  return (
    <SectionShell id="contact" className="border-b-0">
      <div className="rounded-3xl border border-line bg-surface p-8 sm:p-12">
        <SectionHeading
          eyebrow="Contact"
          title="Have a problem worth solving?"
          description="I'm open to freelance work, product collaborations, and interesting side projects. The fastest way to reach me is GitHub — send a message or open an issue."
        />

        <Reveal delay={100}>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-medium text-white transition-transform hover:-translate-y-0.5"
            >
              <Github className="h-4 w-4" />
              Message me on GitHub
              <ArrowUpRight className="h-4 w-4" />
            </a>

            {hasEmail ? (
              <a
                href={`mailto:${siteConfig.email}`}
                className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-5 py-3 text-sm font-medium transition-colors hover:border-ink"
              >
                <Mail className="h-4 w-4" />
                {siteConfig.email}
              </a>
            ) : null}
          </div>
        </Reveal>
      </div>
    </SectionShell>
  );
}
