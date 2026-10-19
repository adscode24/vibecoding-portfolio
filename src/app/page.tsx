import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Projects } from "@/components/sections/projects";
import { Stack } from "@/components/sections/stack";
import { Process } from "@/components/sections/process";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <SiteNav />
      <main className="flex-1">
        <Hero />
        <Projects />
        <About />
        <Stack />
        <Process />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
