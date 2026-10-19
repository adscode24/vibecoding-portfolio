import { siteConfig } from "@/data/site";
import { SectionHeading, SectionShell } from "@/components/section";
import { Reveal } from "@/components/reveal";
import { ContactForm } from "@/components/contact-form";
import { Github, Mail } from "@/components/icons";

export function Contact() {
  return (
    <SectionShell id="contact" className="border-b-0">
      <SectionHeading
        eyebrow="Contact"
        title="Have a problem worth solving?"
        description="I'm open to freelance work, product collaborations, and interesting side projects. Send a message and it lands straight in my inbox."
      />

      <Reveal delay={80}>
        <div className="mt-12 grid gap-8 lg:grid-cols-[1.5fr_1fr] lg:gap-12">
          <ContactForm email={siteConfig.email} />

          <div className="space-y-4">
            <div className="rounded-2xl border border-line bg-surface p-6">
              <Mail className="h-5 w-5 text-accent" />
              <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.15em] text-faint">
                Email
              </p>
              <a
                href={`mailto:${siteConfig.email}`}
                className="mt-1 block break-all text-sm font-medium text-ink underline-offset-4 hover:underline"
              >
                {siteConfig.email}
              </a>
            </div>

            <div className="rounded-2xl border border-line bg-surface p-6">
              <Github className="h-5 w-5 text-accent" />
              <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.15em] text-faint">
                GitHub
              </p>
              <a
                href={siteConfig.github}
                target="_blank"
                rel="noreferrer noopener"
                className="mt-1 inline-block break-all text-sm font-medium text-ink underline-offset-4 hover:underline"
              >
                adscode24
              </a>
            </div>

            <p className="text-sm leading-relaxed text-muted">
              Prefer to just look around first? The projects above are all live —
              click any of them and try them yourself.
            </p>
          </div>
        </div>
      </Reveal>
    </SectionShell>
  );
}
