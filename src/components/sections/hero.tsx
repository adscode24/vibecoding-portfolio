import { siteConfig } from "@/data/site";
import { ArrowRight, Sparkles } from "@/components/icons";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-dots mask-fade-b"
      />

      <div className="relative mx-auto w-full max-w-5xl px-6 pb-20 pt-16 sm:pb-28 sm:pt-24">
        <div className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-3 py-1.5 text-xs text-muted">
          <Sparkles className="h-3.5 w-3.5 text-accent" />
          <span>Available for new projects</span>
        </div>

        <h1 className="mt-8 max-w-3xl text-4xl font-semibold leading-[1.1] tracking-tight text-balance sm:text-6xl">
          Hey, I&rsquo;m {siteConfig.name}.
          <span className="block text-muted">
            I ship web apps built with AI.
          </span>
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted text-pretty">
          {siteConfig.tagline}
        </p>

        <div className="mt-9 flex flex-wrap items-center gap-3">
          <a
            href="#work"
            className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-medium text-white transition-transform hover:-translate-y-0.5"
          >
            See my work
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href={siteConfig.github}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-5 py-3 text-sm font-medium transition-colors hover:border-ink"
          >
            GitHub profile
          </a>
        </div>

        <dl className="mt-16 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-line pt-10 sm:grid-cols-4">
          {siteConfig.stats.map((stat) => (
            <div key={stat.label}>
              <dt className="sr-only">{stat.label}</dt>
              <dd>
                <span className="block text-3xl font-semibold tracking-tight">
                  {stat.value}
                </span>
                <span className="mt-1 block text-sm text-muted">
                  {stat.label}
                </span>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
