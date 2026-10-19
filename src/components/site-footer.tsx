import { siteConfig } from "@/data/site";
import { Github } from "@/components/icons";

// Evaluated once at module load rather than per render, so the page can stay
// fully prerendered instead of opting into dynamic rendering.
const BUILD_YEAR = new Date().getFullYear();

export function SiteFooter() {
  const year = BUILD_YEAR;

  return (
    <footer className="border-t border-line py-10">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
        <p className="text-sm text-muted">
          &copy; {year} {siteConfig.name}. Built with Next.js and a lot of
          vibe coding.
        </p>

        <div className="flex items-center gap-5">
          {siteConfig.socials.map((social) => (
            <a
              key={social.href}
              href={social.href}
              target="_blank"
              rel="noreferrer noopener"
              className="text-sm text-muted transition-colors hover:text-ink"
            >
              {social.label}
            </a>
          ))}
          <a
            href={siteConfig.github}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="GitHub"
            className="text-muted transition-colors hover:text-ink"
          >
            <Github className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
